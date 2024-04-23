import connectDB from "@/app/db/config";
import Message from "@/app/model/Message";
import { NextResponse } from "next/server";

connectDB();

export function GET(){
    return NextResponse.json("Working");
}
export async function POST(request){
    const req = await request.json();
    console.log(req);
    
    try{
        const data = new Message(req);
        await data.save();
    }catch(e){
        console.log("Error in POST Message", e);
        return NextResponse.json("Message Not Sent!", {status:201});
    }

    return NextResponse.json("Message Sent!", {status:200});
}