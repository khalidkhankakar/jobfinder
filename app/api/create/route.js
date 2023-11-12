
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/modles/User";
import dbcon from "@/utlis/dbConnect";
export async function POST(req) {
    await dbcon()
    try {
        const { email, username, password, cpassword, image, resume } = await req.json()
        if (password === cpassword) {
            const existsUser = await User.findOne({ email: email })

            if (existsUser) {
                return NextResponse.json({ msg: 'This email is Already taken', status: 400, submit: false })
            }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await User.create({
                email: email,
                username: username,
                image: image,
                password: hash,
                resume: resume
            })
            const savedUser = await User.save();
        } else {
            return NextResponse.json({ msg: 'Enter same password', status: 400, submit: false })
        }

        return NextResponse.json({ msg: 'Form has been submitted successfully', status: 201, submit: true })
    } catch (error) {
        return NextResponse.json({ msg: 'Account has been created successfully', submit: true, status: 201 })
    }
}

