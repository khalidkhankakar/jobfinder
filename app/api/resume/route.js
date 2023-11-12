import Resume from "@/modles/Resume";
import User from "@/modles/User";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        await dbcon();
        let resumeData = await req.json();
        const [createdResume, updatedUser] = await Promise.all([
            Resume.create(resumeData),
            User.findByIdAndUpdate(resumeData.userId, { resume: true })
          ]);

        return NextResponse.json({ msg: "Resume is created successfully", status:201})
    } catch (error) {
        return NextResponse.json({msg: error, status:500})  
    }
}

// Get the resume details
export async function GET(req){
    try {
            await dbcon();
            const id = req.nextUrl.searchParams.get('id')
            const getResume = await Resume.find({userId:id})
            return NextResponse.json({getResume, submit: true,status: 200  })   
    } catch (error) {
        return NextResponse.json({ submit: true,status: 200  })
        
    }
}