import FileUploadModal from '@components/modal/FileUploadModal'
import SearchBar from '@components/search/SearchBar'
import type { Doc, Id } from '@convex/_generated/dataModel'
import { Authenticated, type ReactMutation } from 'convex/react'
import type { FunctionReference } from 'convex/server'
import type { Dispatch, SetStateAction } from 'react'

export type FileBrowserProperties = {
  title: string
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  createFile: ReactMutation<
    FunctionReference<
      'mutation',
      'public',
      {
        orgId: string
        name: string
        type: Doc<'files'>['type']
        fileId: Id<'_storage'>
      },
      null,
      string | undefined
    >
  >
  orgId: string
}

export default function FilesBrowser({
  title,
  query,
  setQuery,
  createFile,
  orgId,
}: FileBrowserProperties) {
  return (
    <div className="flex flex-col items-center justify-between gap-y-4 lg:flex-row">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <Authenticated>
        {orgId && <FileUploadModal onSubmitFunction={createFile} orgId={orgId} />}
      </Authenticated>
    </div>
  )
}
