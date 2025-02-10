import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";

/*
 * burdan requesti yigisdirsaq novbeti defe bize datani cache olaraq qaytaracaq
 */
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const exsistinUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (exsistinUser)
    return NextResponse.json("User already exist", { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  if (!body.name) return NextResponse.json("Name is required", { status: 400 });
  return NextResponse.json(user, { status: 201 });
}
