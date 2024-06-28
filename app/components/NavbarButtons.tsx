"use client"

import React from "react"
import { signIn, useSession, signOut } from "next-auth/react"

const NavbarButtons = () => {
  const { status, data: session } = useSession()

  return (
    <>
      {status === "authenticated" ? (
        <div className="login">
          <div className="register">
            <p className="loggedin-user" style={{ cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <span>{session?.user?.name}</span>
            </p>
          </div>
          <div className="login-btn">
            <button onClick={() => signOut()} style={{ marginRight: "0", marginLeft: "0.5rem", border: "thin solid #e50914", backgroundColor: "#e50914" }}>
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="login">
          <div className="login-btn">
            <button onClick={() => signIn()}>login</button>
          </div>
          <div className="register">
            <button>pay</button>
          </div>
        </div>
      )}
    </>
  )
}

export default NavbarButtons
