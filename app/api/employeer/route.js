import Employeer from "@/modles/Employeer";
import dbcon from "@/utlis/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbcon();
        const data = await req.json();
        console.log("--- ", data);
        const emp = await Employeer.create(data);
        const saved = await emp.save();
        return NextResponse.json({ saved, msg: "submited", status: 201 })
    } catch (error) {
        return NextResponse.json({ msg: "Not submited", status: 500 })
    }
}

export async function GET(req) {
    try {
        await dbcon();
        const userId = req.nextUrl.searchParams.get('userId')
        const title = req.nextUrl.searchParams.get('title')
        const loca = req.nextUrl.searchParams.get('loca')
        const type = req.nextUrl.searchParams.get('jobtype')
        const salary = req.nextUrl.searchParams.get('pay')



        // console.log(type);
        if (type && title=='' && loca=='' && salary=='') {
            let jobs = await Employeer.find({jobtype:type})
            return NextResponse.json({ jobs: jobs, status: true })
        }
        else if(title && type=='' && loca=='' && salary==''){
            const jobs = await Employeer.find({
                jobtitle: {
                    $regex: title,
                    $options: "i"
                }
            })
            return NextResponse.json({ jobs: jobs, status: true })



        }
        else if(loca && type=='' && title=='' && salary=='' ){
            const jobs = await Employeer.find({
                location: {
                    $regex: loca,
                    $options: "i"
                }
            })
            return NextResponse.json({ jobs: jobs, status: true })

        }
        else if (salary && title=='' && loca=='' && type=='') {
            let jobs = await Employeer.find({salary:salary})
            return NextResponse.json({ jobs: jobs, status: true })
        }
        else if(type && salary && title && loca){
            const jobs = await Employeer.find({
                $or: [
                    {
                        jobtitle: {
                            $regex: title,
                            $options: "i"
                        }
                    },
                    {
                        location: {
                            $regex: loca,
                            $options: "i"
                        }
                    },
                    {
                        jobtype:type
                    },
                    {
                        salary:salary
                    }
                ]
            })
            return NextResponse.json({ jobs: jobs, status: true })

        }
        else if(type && salary && title=='' && loca=='' ){
            let jobs = await Employeer.find({jobtype:type, salary:salary})
            return NextResponse.json({ jobs: jobs, status: true })
        }
        //    if User only search by both title and location
        else if (title && loca && title=='' && salary=='') {
            const jobs = await Employeer.find({
                $or: [
                    {
                        jobtitle: {
                            $regex: title,
                            $options: "i"
                        }
                    },
                    {
                        location: {
                            $regex: loca,
                            $options: "i"
                        }
                    },
                    
                ]
            })
            return NextResponse.json({ jobs: jobs, status: true })
        }

        // userId specfic jobs
        if (userId) {
            const jobs = await Employeer.find({ userId: userId });
            return NextResponse.json({ jobs: jobs, status: true })
        }
        if(type=='' && title=='' && loca=='' && salary==''){
            const jobs = await Employeer.find({});
            return NextResponse.json({ jobs: jobs, status: true })
        }
        // all jobs
        const jobs = await Employeer.find({});
        return NextResponse.json({ jobs: jobs, status: true })


    } catch (error) {
        return NextResponse.json({ msg: "Not submited", status: 400 })
    }
}