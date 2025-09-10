import { api } from '@convex/_generated/api'
import type { Id } from '@convex/_generated/dataModel'
import { addToast } from '@heroui/react'
import { useMutation } from 'convex/react'

export default function useFileDeleteModal() {
  const deleteFile = useMutation(api.files.deleteFile)

  const handleDeleteFile = async ({ fileId }: { fileId: Id<'files'> }) => {
    await deleteFile({ fileId })
    addToast({
      title: 'File moved to deleted files',
      description: new Date().toLocaleString(),
      severity: 'danger',
      color: 'danger',
      variant: 'flat',
    })
  }

  return {
    handleDeleteFile,
  }
}
