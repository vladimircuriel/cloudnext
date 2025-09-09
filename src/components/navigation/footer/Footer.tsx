import CloudNextIcon from '@components/brand/CloudNextIcon'
import CloudNextLogo from '@components/brand/CloudNextLogo'
import { Chip } from '@heroui/chip'
import { Divider } from '@heroui/divider'
import { Link } from '@heroui/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Divider orientation="horizontal" />
      <div className="w-full py-5 mx-auto max-w-7xl md:flex md:items-center md:justify-between">
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start">
            <div className="flex items-center">
              <Link className="flex flex-row items-center justify-center gap-1" href="/">
                <CloudNextIcon />
                <CloudNextLogo />
              </Link>
            </div>
            <Divider className="hidden h-4 md:block" orientation="vertical" />
            <Chip className="px-0 border-none text-default-500" color="success" variant="dot">
              All systems operational
            </Chip>
          </div>
          <p className="text-center transition duration-300 text-tiny text-default-400 md:text-start hover:scale-105 hover:text-primary">
            &copy; {year}{' '}
            <Link
              size="sm"
              showAnchorIcon
              isExternal
              color="foreground"
              href="https://vladimircuriel.com"
            >
              Vladimir Curiel
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
