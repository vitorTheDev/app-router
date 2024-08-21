
const getClient = async (user: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
  if (res.ok) {
    return await res.json()
  }
}

export default async function DashboardClient({ params: { client } }: { params: { client: string } }) {
  const clientData = await getClient(client)
  return <>
    <h1>Client {clientData.id}: {clientData.name}</h1>
    <ul>
      {clientData && Object.entries(clientData)
        .map(([key, value]: [key: string, value: any]) => <li key={key}>
          {key}: <b><pre>{JSON.stringify(value, null, 2)}</pre></b>
        </li>)}
    </ul >
  </>
}