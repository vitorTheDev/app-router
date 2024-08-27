'use client'

import { useFormStatus } from "react-dom"

export default function Button({ type, children }: { children: React.ReactNode, type: HTMLButtonElement['type'] }) {
  const { pending } = useFormStatus()

  return <button disabled={pending} type={type}>{pending ? 'Carregando...' : children}</button>
}