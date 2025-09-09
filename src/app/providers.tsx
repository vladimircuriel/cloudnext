'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'
import { CLERK_PUBLISHABLE_KEY } from '@lib/constants/config.constants'
import { useRouter } from 'next/navigation'

// @ts-expect-error
declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error('Clerk publishable key is not set')
  }

  const router = useRouter()

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <HeroUIProvider navigate={router.push}>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </ClerkProvider>
  )
}
