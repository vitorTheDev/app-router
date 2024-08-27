import Link from "next/link";

export default function Navbar() {
  return <nav className="flex justify-between flex-wrap p-3">
    <ul className="flex gap-2">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/tags">Tags</Link>
      </li>
    </ul>
    <ul className="flex gap-2">
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
}