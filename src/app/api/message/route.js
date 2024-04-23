import connectDB from "@/app/db/config";
import Message from "@/app/model/Message";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
    var data;
    try {
        data = await Message.find();
        console.log(data);
    } catch (e) {
        console.log("Error in GET Message", e);
        return NextResponse.json("Messages Not Fetched!", { status: 201 });
    }
    return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
    const req = await request.json();
    console.log(req);

    try {
        const data = new Message(req);
        await data.save();
    } catch (e) {
        console.log("Error in POST Message", e);
        return NextResponse.json("Message Not Sent!", { status: 201 });
    }

    return NextResponse.json("Message Sent!", { status: 200 });
}

export async function DELETE(request) {
    const {id} = await request.json();
    try {
        const ack = await Message.findByIdAndDelete({_id:id});
        if(!ack){
            return NextResponse.json("Message Not Deleted!", { status: 201 });
        }
    } catch (e) {
        console.log("Error in DELETE Message", e);
        return NextResponse.json("Message Not Deleted!", { status: 201 });
    }
    return NextResponse.json("Message Deleted!", { status: 200 });
}