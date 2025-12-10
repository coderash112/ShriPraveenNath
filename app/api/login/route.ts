import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (body.username === "admin" && body.password === "admin123") {
    return NextResponse.json({ ok: true });
  }
  return new NextResponse("Unauthorized", { status: 401 });
}
