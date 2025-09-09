import SideNav from '@components/navigation/sidenav/SideNav'
import { Divider } from '@heroui/divider';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CloudNext | Files',
  description: 'CloudNext is a cloud storage solution for everyone.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container flex flex-col mx-auto mt-6 lg:flex-row">
      <section className="flex flex-row mr-7 gap-x-5">
        <div className="flex flex-col items-center justify-start flex-1 gap-y-8">
          <h2 className="text-2xl font-bold text-primary">Categories</h2>
          <SideNav />
        </div>
        <Divider orientation="vertical" />
      </section>


      <section className="flex-5">{children}</section>
    </div>
  )
}
