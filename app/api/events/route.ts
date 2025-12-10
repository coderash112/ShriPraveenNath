import { NextResponse } from "next/server";

let events: any[] = [];

export async function GET() {
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const body = await req.json();
  events.push({
    id: Date.now(),
    date: body.date,
    remarks: body.remarks,
  });
  return NextResponse.json({ success: true });
}
