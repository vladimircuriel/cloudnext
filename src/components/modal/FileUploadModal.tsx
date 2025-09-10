import FileUploadForm from '@components/forms/FileUploadForm'
import type { Doc, Id } from '@convex/_generated/dataModel'
import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/modal'
import { Spacer } from '@heroui/spacer'
import useFileUploadModal from '@lib/hooks/useFileUploadModal'

export type FileUploadProperties = {
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
}

export default function FileUploadModal({ orgId, onSubmitFunction }: FileUploadProperties) {
  const { isOpen, onOpen, onClose, submitButtonDisable, setSubmitButtonDisable } =
    useFileUploadModal()

  return (
    <>
      <Button
        variant="flat"
        color="primary"
        className="shadow-lg shadow-primary/50"
        onPress={onOpen}
      >
        Upload File
      </Button>
      <Modal size="2xl" isOpen={isOpen} isDismissable={false} hideCloseButton onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload your file here
                <Spacer y={1} />
              </ModalHeader>
              <ModalBody>
                <FileUploadForm
                  orgId={orgId}
                  onSubmitFunction={onSubmitFunction}
                  onClose={onClose}
                  setSubmitButtonDisable={setSubmitButtonDisable}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  isDisabled={submitButtonDisable}
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="shadow-lg shadow-primary/50"
                  color="primary"
                  type="submit"
                  form="uploadForm"
                  variant="flat"
                  isDisabled={submitButtonDisable}
                  isLoading={submitButtonDisable}
                >
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
