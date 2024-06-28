import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import ModifiedFooter from "./components/ModifiedFooter"
import { NextAuthProviderWrapper } from "./components/NextAuthProviderWrapper"

const inter = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CINEMA | LATEST MOVIES AND SHOWS",
  description: "This is the best platform to get latest shows and movies for your entertainment"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "black" }}>
        <NextAuthProviderWrapper>
          <main className="for-overflow">
            <Navbar />
            {children}
            <ModifiedFooter />
          </main>
        </NextAuthProviderWrapper>
      </body>
    </html>
  )
}
