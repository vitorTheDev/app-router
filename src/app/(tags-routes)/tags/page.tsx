import { AddTag } from "../add-tag/page"



export default async function Tags() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:3333/tags', { next: {
    tags: ['get-tags'],
    revalidate: 5,
  } })
  const data: any[] = await res.json()

  return <>
    <ul>
      {data?.length && data.map(tag => <li key={tag.id}>{tag.slug}</li>)}
    </ul>
    <AddTag></AddTag>
  </>
}