import type { FileUploadFormProperties } from '@components/forms/FileUploadForm'
import { api } from '@convex/_generated/api'
import { addToast } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'convex/react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FILE_TYPES from '@/src/lib/constants/files.constants'

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title must be at least 1 character' })
    .max(100, { message: 'Title must be at most 100 characters' }),
  file: z
    .custom<FileList>((value) => value instanceof FileList, 'Required')
    .refine((files) => files.length > 0, 'Required'),
})

export function useFileUploadForm({
  orgId,
  onSubmitFunction,
  onClose,
  setSubmitButtonDisable,
}: FileUploadFormProperties) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      file: undefined,
    },
  })

  const generateUploadUrl = useMutation(api.files.generateUploadUrl)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!orgId) return
    setSubmitButtonDisable(true)

    const { title, file } = values
    const { type: fileType } = file[0]

    const postUrl = await generateUploadUrl()
    const result = await fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': fileType },
      body: file[0],
    })
    const { storageId } = await result.json()

    try {
      await onSubmitFunction({
        name: title,
        orgId,
        fileId: storageId,
        type: FILE_TYPES[fileType],
      })

      addToast({
        title: 'File uploaded successfully',
        description: new Date().toLocaleString(),
        color: 'primary',
        variant: 'flat',
      })
      form.reset()
      onClose()
    } catch (error) {
      if (error instanceof Error) {
        addToast({
          title: 'File type not supported. Only images, documents and csv.',
          description: new Date().toLocaleString(),
          color: 'danger',
          variant: 'flat',
        })
      }
    } finally {
      setSubmitButtonDisable(false)
    }
  }
  return { form, onSubmit }
}
