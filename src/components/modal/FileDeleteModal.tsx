import type { Doc } from '@convex/_generated/dataModel'
import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/modal'
import useFileDeleteModal from '@lib/hooks/useFileDeleteModal'

type FileDeleteModalProperties = {
  isOpen: boolean
  onOpen: () => void
  onOpenChange: (isOpen: boolean) => void
  file: Doc<'files'>
}

export default function FileDeleteModal({ isOpen, onOpenChange, file }: FileDeleteModalProperties) {
  const { handleDeleteFile } = useFileDeleteModal()
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={false}
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Are you sure you want to mark this file as deleted?
            </ModalHeader>
            <ModalBody>
              <p>
                This action will move the file to the deleted files section. You can restore it or
                will be permanently deleted after 30 days.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  handleDeleteFile({ fileId: file._id })
                  onClose()
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
