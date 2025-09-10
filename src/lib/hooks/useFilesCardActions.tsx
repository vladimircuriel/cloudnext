import { useUser } from '@clerk/nextjs'
import type { FilesCardActionsProps } from '@components/card/actions/FileCardActions'
import { api } from '@convex/_generated/api'
import { useDisclosure } from '@heroui/use-disclosure'
import { useMutation, useQuery } from 'convex/react'

export default function useFilesCardActions({ file, orgId }: FilesCardActionsProps) {
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0'
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const toggleFavorite = useMutation(api.files.toggleFavorite)
  const restoreFile = useMutation(api.files.restoreFile)
  const me = useQuery(api.users.getMe)
  const user = useUser()
  const isAdmin =
    user.user?.organizationMemberships.some(
      (membership) => membership.organization.id === orgId && membership.role === 'org:admin',
    ) || file.userId === me?._id

  return { iconClasses, isOpen, onOpen, onOpenChange, toggleFavorite, restoreFile, isAdmin }
}
