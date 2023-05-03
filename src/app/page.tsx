import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SignOut } from "@/components/signout";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user ? (
        <div>
          <h2>Welcome {session.user.name}</h2>
          <SignOut />
        </div>
      ) : (
        <Link href="/api/auth/signin">
          <button className="text-white bg-slate-800 py-2 px-6 rounded-md">
            Login
          </button>
        </Link>
      )}
    </main>
  );
}
