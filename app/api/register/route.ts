import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import prisma from "@/lib/prismadb"

export async function POST(req: Request) {
  try {
    const { name, phone, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({ data: { name, password: hashedPassword, phone } })

    return NextResponse.json({ message: "User registered." }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 })
  }
}
