import FileCardActions from '@components/card/actions/FileCardActions'
import FileTextIcon from '@components/icons/FileTextIcon'
import TextIcon from '@components/icons/TextIcon'
import { api } from '@convex/_generated/api'
import type { Doc } from '@convex/_generated/dataModel'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Spacer } from '@heroui/spacer'
import { User } from '@heroui/user'
import FILE_TYPES from '@lib/constants/files.constants'
import formattedDate from '@lib/utils/date'
import { useQuery } from 'convex/react'
import Image from 'next/image'

type FileCardProps = {
  file: Doc<'files'> & { url?: string | null }
  isFavorite: boolean
  orgId: string
}

export default function FileCard({ file, isFavorite, orgId }: FileCardProps) {
  const userProfile = useQuery(api.users.getProfile, {
    userId: file.userId,
  })

  return (
    <Card className="p-2 min-w-[200px] col-span-3 lg:col-span-1">
      <CardHeader>
        <p>{FILE_TYPES[file.type]}</p>
        <Spacer x={2} />
        <h2 className="w-full text-base font-normal truncate ">{file.name}</h2>
        <FileCardActions file={file} isFavorite={isFavorite} orgId={orgId} />
      </CardHeader>
      <CardBody className="flex items-center justify-center">
        {file.type === 'image' && file.url && (
          <Image src={file.url} width={250} height={250} alt={file.name} />
        )}
        {file.type === 'pdf' && <FileTextIcon />}
        {file.type === 'csv' && <TextIcon />}
      </CardBody>
      <CardFooter className="flex flex-col items-center justify-between gap-y-4">
        <div className="flex items-center justify-between gap-x-4">
          <User
            className="flex-3"
            name={userProfile?.name}
            avatarProps={{ src: userProfile?.image }}
          />
          <p className="text-xs flex-2 text-default-400">
            Uploaded on {formattedDate(new Date(file._creationTime))}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
