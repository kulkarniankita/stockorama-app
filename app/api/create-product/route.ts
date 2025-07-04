import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  //protect it
  const { productName, quantity } = await request.json();
  console.log({ productName, quantity });
  return NextResponse.json({ message: "Product added successfully" });
}
