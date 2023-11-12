import Employeer from "@/modles/Employeer";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req){
try {
        await dbcon();
        const id = req.nextUrl.searchParams.get('id')
        console.log(id);
        const job = await Employeer.findById({_id:id})
        return NextResponse.json({job, submit: true,status: 200  })   
} catch (error) {
    return NextResponse.json({ submit: false,status: 500  })  
}
}