import type { Doc, Id } from '@convex/_generated/dataModel'
import { Input } from '@heroui/react'
import { useFileUploadForm } from '@lib/hooks/useFileUploadForm'

export type FileUploadFormProperties = {
  orgId: string
  onSubmitFunction: ({
    name,
    orgId,
    fileId,
    type,
  }: {
    name: string
    orgId: string
    fileId: Id<'_storage'>
    type: Doc<'files'>['type']
  }) => void
  onClose: () => void
  setSubmitButtonDisable: (status: boolean) => void
}

export default function FileUploadForm({
  orgId,
  onSubmitFunction,
  onClose,
  setSubmitButtonDisable,
}: FileUploadFormProperties) {
  const { form, onSubmit } = useFileUploadForm({
    orgId,
    onSubmitFunction,
    onClose,
    setSubmitButtonDisable,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <section>
      <form id="uploadForm" className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          type="text"
          label="Title"
          variant="bordered"
          placeholder="Enter the title of your file"
          isRequired
          isClearable
          {...register('title')}
        />

        <Input
          id="file"
          label="Select File"
          variant="bordered"
          type="file"
          {...register('file')}
          isRequired
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </form>
    </section>
  )
}
