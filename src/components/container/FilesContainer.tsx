'use client'

import FilesBrowser from '@components/browser/FilesBrowser'
import FileEmptyContainer from '@components/container/FileEmptyContainer'
import Loading from '@components/loading/Loading'
import FileTypeSelector from '@components/selector/FileTypeSelector'
import FilesTabs from '@components/tabs/FilesTabs'
import useFilesManager from '@lib/hooks/useFilesManager'

export default function FilesContainer({
  favorites,
  deletes,
}: {
  favorites: boolean
  deletes: boolean
}) {
  const {
    orgId,
    createFile,
    files,
    favoritesFiles,
    isLoading,
    users,
    query,
    setQuery,
    type,
    setType,
  } = useFilesManager({ favorites: favorites, deletes: deletes })

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {files && (
        <div className="flex flex-col gap-y-8">
          {orgId && (
            <FilesBrowser
              title="Your Files"
              query={query}
              setQuery={setQuery}
              createFile={createFile}
              orgId={orgId}
            />
          )}

          <FileTypeSelector type={type} setType={setType} />

          {files?.length === 0 && query === '' && (
            <FileEmptyContainer title="You have no files, upload one now!" />
          )}
          {files.length === 0 && query !== '' && (
            <FileEmptyContainer title="No file matched your query" />
          )}
          {files.length > 0 && orgId && (
            <FilesTabs
              files={files}
              favoritesFiles={favoritesFiles ?? []}
              orgId={orgId}
              users={users ?? []}
            />
          )}
        </div>
      )}
    </>
  )
}
