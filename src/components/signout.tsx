"use client"
import { signOut } from 'next-auth/react'
import { PropsWithChildren } from 'react'

export const SignOut = () => {
    return (
        <button onClick={() => void signOut()}>Sign out</button>
    )
}