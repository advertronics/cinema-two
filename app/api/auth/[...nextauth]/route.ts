import prisma from "@/lib/prismadb"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"

import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Cinema",
      credentials: {
        phone: {
          label: "phone",
          type: "number",
          placeholder: "0712990778"
        },
        password: {
          label: "password",
          type: "password"
        }
      },

      async authorize(credentials) {
        //const user = { id: "1", name: "0712990778", password: "m1m1@CINEMA" }  - for testing
        if (!credentials?.phone || !credentials?.password) {
          return null
        }

        //return user

        try {
          const user = await prisma.user.findUnique({ where: { phone: credentials.phone } })
          if (!user) {
            return null
          }

          const passwordsMatch = await bcrypt.compare(credentials.password, user.password)

          if (!passwordsMatch) {
            return null
          }

          return {
            id: user.id,
            phone: user.phone,
            name: user.name
          }
        } catch (error) {
          console.log("Error: ", error)
          return null
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          phone: token.phone
        }
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const typeCastedUser = user as unknown as any
        return {
          ...token,
          id: typeCastedUser.id,
          phone: typeCastedUser.phone
        }
      }
      return token
    }
  },

  //secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
