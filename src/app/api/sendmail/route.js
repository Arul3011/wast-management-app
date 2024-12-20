import { NextResponse } from "next/server";
import sendEmail from "@/lib/mail";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    return NextResponse.json({ status: true });
//      const product = `  
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
//       <h2 style="color: #007BFF; text-align: center;">Recycle Rally Product Request</h2>
//       <p>Dear Seller,</p>
//       <p>We have received a request for one of your products on the <b>Recycle Rally</b> site.</p>
//       <p><b>Details of the request:</b></p>
//       <ul style="list-style-type: none; padding: 0;">
//         <li><b>Name:</b> arul</li>
//         <li><b>Mobile Number:</b>9344569319</li>
//         <li><b>Product:</b> glass</li>
//       </ul>
//       <center>
//         <a href='tel:9344569319' style="
//         display: inline-block;
//         background-color: #28a745; 
//         color: white; 
//         text-decoration: none; 
//         padding: 10px 20px; 
//         font-size: 16px; 
//         font-weight: bold; 
//         border-radius: 5px; 
//         text-align: center;">
//         &#128222; Call 
//         </a>
//       </center>
//       <p>Thank you for using <b>Recycle Rally</b>.</p>
//       <p style="text-align: center; font-size: 12px; color: #666; margin-top: 20px;">&copy; 2024 Waste Rally. All rights reserved.</p>
//     </div>
//   `
//     const mailstst = await sendEmail(
//         "arul.y@proton.me",
//         "Request to buy your product",
//         product
//     );
//     if (mailstst) {
//         return NextResponse.json({
//             states: true,
//         });
//     }
//     return NextResponse.json({
//         states: false,
//     });
}

export async function POST(request) {

    const resdata = await request.json();
    const client = await clientPromise;
    const db = await client.db("wasteuserdtabase");
    const dbres = await db.collection("users").findOne({ email:  resdata.email});
    if(dbres){
         const product = `  
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
      <h2 style="color: #007BFF; text-align: center;">Recycle Rally Product Request</h2>
      <p>Dear Seller,</p>
      <p>We have received a request for one of your products on the <b>Recycle Rally</b> site.</p>
      <p><b>Details of the request:</b></p>
      <ul style="list-style-type: none; padding: 0;">
        <li><b>Name:</b> ${dbres.name}</li>
        <li><b>Mobile Number:</b> ${dbres.mobialNum}</li>
        <li><b>Product:</b> ${resdata.type}</li>
      </ul>
      <center>
        <a href='tel:${dbres.mobialNum}' style="
        display: inline-block;
        background-color: #28a745; 
        color: white; 
        text-decoration: none; 
        padding: 10px 20px; 
        font-size: 16px; 
        font-weight: bold; 
        border-radius: 5px; 
        text-align: center;">
        &#128222; Call 
        </a>
      </center>
      <p>Thank you for using <b>Recycle Rally</b>.</p>
      <p style="text-align: center; font-size: 12px; color: #666; margin-top: 20px;">&copy; 2024 Waste Rally. All rights reserved.</p>
    </div>
  `
    const mailstst = await sendEmail(
        resdata.clientemail,
        "Request to buy your product",
        product
    );
    if (mailstst) {
        return NextResponse.json({
          resstates: true,
        });
    }else{
      return NextResponse.json({resstates:false})
    }
  
  }else{
    return NextResponse.json({resstates:false})
  }
}