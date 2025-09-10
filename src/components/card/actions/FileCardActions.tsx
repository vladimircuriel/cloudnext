import ActionsDotsIcon from '@components/icons/ActionsDotsIcon'
import DeleteDocumentIcon from '@components/icons/DeleteDocumentIcon'
import DownloadDocumentIcon from '@components/icons/DownloadDocumentIcon'
import FavoriteDocumentIcon from '@components/icons/FavoriteDocumentIcon'
import UndoIcon from '@components/icons/UndoIcon'
import FileDeleteModal from '@components/modal/FileDeleteModal'
import type { Doc } from '@convex/_generated/dataModel'
import { Button } from '@heroui/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/dropdown'
import { cn } from '@heroui/react'
import useFilesCardActions from '@lib/hooks/useFilesCardActions'

export type FilesCardActionsProps = {
  file: Doc<'files'> & { url?: string | null }
  isFavorite: boolean
  orgId: string
}

export default function FilesCardActions({ file, isFavorite, orgId }: FilesCardActionsProps) {
  const { iconClasses, isOpen, onOpen, onOpenChange, toggleFavorite, restoreFile, isAdmin } =
    useFilesCardActions({ file, isFavorite, orgId })

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" color="primary" isIconOnly aria-label="actions">
            <ActionsDotsIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
          <DropdownSection title="Actions Zone" showDivider>
            <DropdownItem
              key="download"
              className="text-primary"
              color="primary"
              description="Open the file"
              startContent={<DownloadDocumentIcon />}
              onPress={() => {
                if (file.url) window.open(file.url, '_blank')
              }}
            >
              Open
            </DropdownItem>
            <DropdownItem
              key="favorite"
              className="text-primary"
              color="primary"
              description="Add to favorites files"
              startContent={
                isFavorite ? (
                  <FavoriteDocumentIcon
                    className={cn(iconClasses, 'fill-primary stroke-primary')}
                  />
                ) : (
                  <FavoriteDocumentIcon className={cn(iconClasses, 'text-primary')} />
                )
              }
              onPress={() => toggleFavorite({ fileId: file._id })}
            >
              {isFavorite ? 'Unfavorite' : 'Favorite'}
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Danger Zone">
            {file.shouldDelete ? (
              <DropdownItem
                key="restore"
                className="text-success"
                color="success"
                description="Restore the file"
                startContent={<UndoIcon className={cn(iconClasses, 'text-success')} />}
                onPress={() => restoreFile({ fileId: file._id })}
              >
                Restore file
              </DropdownItem>
            ) : isAdmin ? (
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                description="Permanently delete the file"
                startContent={<DeleteDocumentIcon className={cn(iconClasses, 'text-danger')} />}
                onPress={onOpen}
              >
                Delete file
              </DropdownItem>
            ) : (
              <DropdownItem
                key="delete"
                className="text-default-500"
                color="default"
                description="Not enough permissions to delete the file"
                startContent={<DeleteDocumentIcon className={cn(iconClasses, 'text-default')} />}
              >
                Only admin can delete files
              </DropdownItem>
            )}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <FileDeleteModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} file={file} />
    </>
  )
}
