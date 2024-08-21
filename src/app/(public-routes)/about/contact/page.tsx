'use client'
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter()
  return <>
    <h1>Contact</h1>
    <a onClick={() => router.back()}>Back</a>
  </>
}