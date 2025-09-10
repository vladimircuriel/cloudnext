'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'
import { CLERK_PUBLISHABLE_KEY, CONVEX_URL } from '@lib/constants/config.constants'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
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

  if (!CONVEX_URL) {
    throw new Error('Convex URL is not set')
  }

  const convex = new ConvexReactClient(CONVEX_URL)
  const router = useRouter()

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <HeroUIProvider navigate={router.push}>
          <ToastProvider />
          {children}
        </HeroUIProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
