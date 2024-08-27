'use client'

import { useOptimistic } from "react"
import { deleteTag } from "./actions"

export default function TagItem({ tag }: { tag: any }) {
  const [optimisticTag, setOptimisticTag] = useOptimistic<any, any>(tag, (_state, newTag) => newTag)
  const optimisticDelete = async () => {
    setOptimisticTag(undefined)
    deleteTag(tag.id)
  }
  return optimisticTag && <li className="flex flex-row gap-2">
    {optimisticTag.slug}
    <div className="text-red-500 cursor-pointer" onClick={optimisticDelete}>
      X
    </div>
  </li>
}