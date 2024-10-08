import AddTag from "./AddTag"
import TagItem from "./TagItem"

export default async function Tags() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:3333/tags', {
    next: {
      tags: ['get-tags'],
      revalidate: 5,
    }
  })
  const data: any[] = await res.json()

  return <>
    <AddTag></AddTag>
    <ul>
      {data?.length && data.map(tag => <TagItem key={tag.id} tag={tag}></TagItem>)}
    </ul>
  </>
}