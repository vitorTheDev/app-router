'use server'

import { revalidateTag } from "next/cache"

export async function deleteTag(tagId: string) {
  // todo: sanitize tagId
  await new Promise(resolve => setTimeout(resolve, 3000))
  await fetch(`http://localhost:3333/tags/${tagId}`, { method: 'DELETE' })
  revalidateTag('get-tags')
}