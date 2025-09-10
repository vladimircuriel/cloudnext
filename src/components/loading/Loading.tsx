import { Spinner } from '@heroui/react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh_-_130px)]">
      <Spinner className="v" size="lg" color="primary" />
    </div>
  )
}
