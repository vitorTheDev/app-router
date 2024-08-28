import Link from "next/link";

const getClients = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 5, },
  })
  if (res.ok) {
    return await res.json()
  } else {
    return []
  }
}

export default async function Dashboard() {
  const clients = await getClients();
  return <>
    <h1>Dashboard</h1>
    <ul>
      {clients?.length && clients.map((client: any) => <li key={client.id}>
        <Link href={`/dashboard/${client.id}`}>Client {client.id}: {client.name}</Link>
      </li>)}
    </ul>
  </>
}