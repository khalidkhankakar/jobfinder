import User from "@/modles/User";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req){
try {
        await dbcon();
        const id = req.nextUrl.searchParams.get('id')
        const getUserD = await User.findById({_id:id})
        return NextResponse.json({getUserD, submit: true,status: 200  })   
} catch (error) {
    return NextResponse.json({ submit: true,status: 200  })  
}
}