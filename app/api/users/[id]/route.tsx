import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) return NextResponse.json("User Not Found", { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const body = await request.json();

    const user = await prisma.user.findUnique({
      where: { id: Number(params.id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    const validate = schema.safeParse(body);
    if (!validate.success) {
      return NextResponse.json(validate.error.errors, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(params.id) },
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  if (!user) return NextResponse.json("User Not Found", { status: 404 });

  await prisma.user.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({});
}
