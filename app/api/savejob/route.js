import Employeer from "@/modles/Employeer";
import SaveJob from "@/modles/Save";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        await dbcon();
        const saveJob = await req.json();
        const job = await SaveJob.create(saveJob);
        return NextResponse.json({ job:job, status:true  })
    } catch (error) {
        return NextResponse.json({ msg: "Not submited", status: 400 })
    }
}