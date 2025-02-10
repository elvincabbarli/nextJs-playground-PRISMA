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
  const body = await request.json();

  const validate = schema.safeParse(body);
  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 });
  return NextResponse.json({ id: params.id, name: body.name });
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
