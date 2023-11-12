import Employeer from "@/modles/Employeer";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await dbcon();
        const jobs = await Employeer.find({});
        return NextResponse.json({ jobs:jobs, status:true  })
    } catch (error) {
        return NextResponse.json({ msg: "Not submited", status: 400 })
    }
}