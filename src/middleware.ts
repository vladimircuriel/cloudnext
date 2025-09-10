import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const allFilesRoute = createRouteMatcher(['/dashboard/files'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isHomeRoute = createRouteMatcher(['/'])

export default clerkMiddleware(async (auth, request) => {
  if (isAdminRoute(request)) {
    const session = await auth()

    const isAdmin = session.orgRole === 'admin' || session.orgRole === 'org:admin'
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }
  if (allFilesRoute(request)) {
    const session = await auth()
    if (!session.userId) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  if (isHomeRoute(request)) {
    const user = (await auth()).userId
    if (user) {
      return NextResponse.redirect(new URL('/dashboard/files', request.url))
    }
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
