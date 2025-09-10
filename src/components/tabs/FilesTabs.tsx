import FilesRenderer from '@components/files/FilesRenderer'
import GridIcon from '@components/icons/GridIcon'
import TableIcon from '@components/icons/TableIcon'
import FilesTable from '@components/table/FilesTable'
import type { Doc, Id } from '@convex/_generated/dataModel'
import { Tab, Tabs } from '@heroui/tabs'

type FilesTabsProps = {
  files: Doc<'files'>[]
  favoritesFiles: Doc<'favorites'>[]
  orgId: string
  users: { id: Id<'users'>; name: string; image: string }[]
}

export default function FilesTabs({ files, favoritesFiles, orgId, users }: FilesTabsProps) {
  return (
    <Tabs>
      <Tab
        key="grid"
        title={
          <div className="flex flex-row items-center justify-center gap-x-2">
            <GridIcon />
            <p>Grid</p>
          </div>
        }
      >
        {orgId && (
          <FilesRenderer files={files} favoriteFiles={favoritesFiles ?? []} orgId={orgId} />
        )}
      </Tab>
      <Tab
        key="table"
        title={
          <div className="flex flex-row items-center justify-center gap-x-2">
            <TableIcon />
            <p>Table</p>
          </div>
        }
      >
        <FilesTable files={files} users={users ?? []} favoritesFiles={favoritesFiles ?? []} />
      </Tab>
    </Tabs>
  )
}
