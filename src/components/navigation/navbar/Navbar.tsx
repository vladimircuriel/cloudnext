import {
  ClerkLoading,
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs'

import CloudNextIcon from '@components/brand/CloudNextIcon'
import CloudNextLogo from '@components/brand/CloudNextLogo'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Spinner } from '@heroui/spinner'

export default function Navbar() {
  return (
    <HeroUINavbar isBordered isBlurred maxWidth="xl">
      <NavbarBrand>
        <Link className="flex flex-row items-center justify-center gap-1" href="/">
          <CloudNextIcon />
          <CloudNextLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ClerkLoading>
            <Spinner size="lg" color="primary" />
          </ClerkLoading>
          <SignedOut>
            <SignInButton>
              <Button variant="shadow" color="primary">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </NavbarItem>
        <NavbarItem>
          <SignedIn>
            <SignOutButton>
              <OrganizationSwitcher />
            </SignOutButton>
          </SignedIn>
        </NavbarItem>
        <NavbarItem>
          <SignedIn>
            <SignOutButton>
              <UserButton />
            </SignOutButton>
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  )
}
