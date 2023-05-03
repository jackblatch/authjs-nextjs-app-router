"use client";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button
      onClick={() => void signOut()}
      className="text-white bg-slate-800 py-2 px-6 rounded-md"
    >
      Sign out
    </button>
  );
};
