import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SignOut } from "@/components/signout";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-24 text-center">
      <h1 className="text-2xl font-semibold mb-6">
        Authjs with Nextjs App Router
      </h1>
      {session?.user ? (
        <div>
          <h2 className="text-xl mb-2">Welcome {session.user.name}</h2>
          <SignOut />
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-2">Welcome</h2>
          <Link href="/api/auth/signin">
            <button className="text-white bg-slate-800 py-2 px-6 rounded-md">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
