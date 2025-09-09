import RightIcon from '@components/icons/RightIcon'
import { Button } from '@heroui/button'
import { Image } from '@heroui/image'
import { Link } from '@heroui/link'
import { Spacer } from '@heroui/spacer'

export default function Home() {
  return (
    <div className="flex flex-col items-center px-3">
      <section className="flex flex-col items-center justify-center">
        <Button
          className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-primary-400"
          endContent={<RightIcon />}
          radius="full"
          variant="bordered"
        >
          New onboarding experience
        </Button>
        <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
          <div className="text-transparent bg-gradient-to-r from-primary via-primary to-primary-300 bg-clip-text">
            Easiest way to <br /> to add your files to cloud.
          </div>
        </div>
        <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
          Store, share and manage your files with ease. Get started with our free plan today.
        </p>

        <Spacer y={5} />

        <Button as={Link} href="/dashboard/files" color="primary" variant="shadow">
          Get Started
        </Button>

        <Spacer y={16} />
      </section>
      <section className="max-w-7xl">
        <Image src="/cloudnext.png" alt="CloudNext app hero image" className="rounded-xl" />
      </section>
    </div>
  )
}
