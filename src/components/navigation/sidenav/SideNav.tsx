'use client'

import DeleteIcon from '@components/icons/DeleteIcon'
import FileIcon from '@components/icons/FileIcon'
import StarIcon from '@components/icons/StarIcon'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import ROUTES from '@lib/constants/routes.constants'

import useSideNav from '@lib/hooks/useSideNav'

export default function SideNav() {
  const { filesColor, favoritesColor, deletesColor } = useSideNav()

  return (
    <ul className="flex flex-row lg:flex-col gap-y-2">
      <li>
        <Button
          as={Link}
          className={filesColor}
          href={ROUTES.Files}
          variant="light"
          color="primary"
          startContent={<FileIcon />}
        >
          All Files
        </Button>
      </li>
      <li>
        <Button
          as={Link}
          className={favoritesColor}
          href={ROUTES.Favorites}
          variant="light"
          color="primary"
          startContent={<StarIcon />}
        >
          Favorites
        </Button>
      </li>
      <li>
        <Button
          as={Link}
          className={deletesColor}
          href={ROUTES.Deletes}
          variant="light"
          color="primary"
          startContent={<DeleteIcon />}
        >
          Deletes
        </Button>
      </li>
    </ul>
  )
}
