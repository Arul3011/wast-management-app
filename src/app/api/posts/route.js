import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
const client = await clientPromise;

export async function GET() {
  const db = await client.db("wasteuserdtabase");
  const dbresponse = await db.collection("posts").find().toArray();
  return NextResponse.json({ dbresponse });
}

export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const db = await client.db("wasteuserdtabase");
  const insertresponse = await db.collection("posts").insertOne(fetdata);
  if (insertresponse) {
    return NextResponse.json({
      messege: "added",
    });
  }
    return NextResponse.json({
      messege: "notAdded",
    });
}

export async function DELETE(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  console.log(fetdata.id);
  
  const db = await client.db("wasteuserdtabase");
  const insertresponse = await db.collection("posts")
  .deleteOne({_id: new ObjectId(fetdata.id)});
  // { _id: fetdata.id }
    if(insertresponse){
      console.log(insertresponse);
      return NextResponse.json({ sts: insertresponse.acknowledged });
      // return NextResponse.json({ sts: true });
    } 
  // return NextResponse.json({sts:false})
}

export async function PATCH(response) {
  const apires = await response;
  const apijson = await apires.json();
  const db = await client.db("wasteuserdtabase");
  const dbresponse = await db
    .collection("posts")
    .updateOne(
      { _id: new ObjectId(apijson.id) },
      { $set: { post: apijson.post } }
    );
  return NextResponse.json({ dbresponse });
}