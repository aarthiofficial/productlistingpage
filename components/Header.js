import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <Link href="/">
        <h1 className="text-xl font-bold">PLP</h1>
      </Link>
      <nav className="space-x-4">
        {session ? (
          <>
            <span className="text-gray-700">Hello, {session.user.name}</span>
            <button onClick={() => signOut()} className="bg-red-500 text-white px-3 py-1 rounded">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/signin" className="text-blue-500">Sign In</Link>
            <Link href="/signup" className="text-green-500">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}
