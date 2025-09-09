'use client'

import ROUTES from '@lib/constants/routes.constants'
import { usePathname } from 'next/navigation'

export default function useSideNav() {
  const pathname = usePathname()

  const isFiles = pathname === ROUTES.Files
  const isFavorites = pathname === ROUTES.Favorites
  const isDeletes = pathname === ROUTES.Deletes

  const activeColor = 'bg-primary-200'

  const filesColor = isFiles ? activeColor : ''
  const favoritesColor = isFavorites ? activeColor : ''
  const deletesColor = isDeletes ? activeColor : ''

  return {
    filesColor,
    favoritesColor,
    deletesColor,
  }
}
