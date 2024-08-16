"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const UserNav = () => {
  return (
    <Button onClick={() => signOut({
        redirect:true,
        callbackUrl: `${window.location.origin}/sign-in`
    })} variant='destructive'>
    Signout
    </Button>
    
  )
}

export default UserNav