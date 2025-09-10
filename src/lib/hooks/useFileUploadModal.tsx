import { useDisclosure } from '@heroui/use-disclosure'
import { useState } from 'react'

export default function useFileUploadModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false)

  return {
    isOpen,
    onOpen,
    onClose,
    submitButtonDisable,
    setSubmitButtonDisable,
  }
}
