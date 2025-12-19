'use client'

import { redirect } from 'next/navigation'
import CloudNextLogo from '../components/brand/CloudNextLogo'

export default function NotFound() {
  redirect('/')

  return (
    <main>
      <CloudNextLogo />
    </main>
  )
}
