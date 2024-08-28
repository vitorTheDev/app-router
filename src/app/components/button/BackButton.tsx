'use client'

import { useRouter } from "next/navigation"

interface Props {
  children: React.ReactNode,
}

export default function BackButton({ children }: Props) {
  const router = useRouter()
  return <div className="cursor-pointer underline" onClick={() => router.back()}>
    {children}
  </div>
}