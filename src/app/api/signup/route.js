import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const posts = await db.collection("users").find().toArray();
  return NextResponse.json({ posts });
}
export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const dbres = await db.collection("users").insertOne(fetdata);
  if (dbres.acknowledged) {
    return NextResponse.json({ created: true });
  }else{
    return NextResponse.json({ created: false });
  }
}