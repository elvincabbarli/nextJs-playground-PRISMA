import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const products = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });

  if (!products) return NextResponse.json("User Not Found", { status: 404 });

  return NextResponse.json(products);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const body = await request.json();

    const products = await prisma.product.findUnique({
      where: { id: Number(params.id) },
    });

    if (!products) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    const validate = schema.safeParse(body);
    if (!validate.success) {
      return NextResponse.json(validate.error.errors, { status: 400 });
    }

    const updateProduct = await prisma.product.update({
      where: { id: Number(params.id) },
      data: {
        name: body.name,
        price: body.price,
      },
    });

    return NextResponse.json(updateProduct);
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
  const products = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });
  if (!products) return NextResponse.json("User Not Found", { status: 404 });

  await prisma.product.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({});
}
