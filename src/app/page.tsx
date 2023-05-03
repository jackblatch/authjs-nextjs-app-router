import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SignOut } from "@/components/signout";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen pt-24 pb-12">
      <main className="flex-1 flex flex-col items-center justify-top text-center">
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
      <footer>
        Built by{" "}
        <a
          href="https://github.com/jackblatch/authjs-nextjs-app-router"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-slate-700 pb-[1px]"
        >
          @jackblatch
        </a>
        . Source code available on GitHub.
      </footer>
    </div>
  );
}
