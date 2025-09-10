import { ClerkLoading, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import FileUploadModal from '@components/modal/FileUploadModal'
import { Button } from '@heroui/button'
import { Image, Spinner } from '@heroui/react'
import useFilesManager from '@lib/hooks/useFilesManager'

type FileEmptyContainerProperties = {
  title?: string
}

export default function FileEmptyContainer({ title }: FileEmptyContainerProperties) {
  const { createFile, orgId } = useFilesManager({})

  return (
    <div className="flex flex-col items-center justify-center w-full py-8 gap-y-8">
      <Image src="/empty.svg" alt="Empty directory image illustration" />
      <p className="text-2xl font-medium text-primary-400">{title}</p>

      <SignedIn>
        {orgId && <FileUploadModal onSubmitFunction={createFile} orgId={orgId} />}
      </SignedIn>

      <ClerkLoading>
        <Spinner size="lg" color="secondary" />
      </ClerkLoading>

      <SignedOut>
        <SignInButton>
          <Button variant="shadow" color="secondary">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}
