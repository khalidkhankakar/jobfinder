
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/modles/User";
import dbcon from "@/utlis/dbConnect";
import jwt from "jsonwebtoken";
export async function POST(req) {
    await dbcon()
    try {
        const { email, password } = await req.json()
        const existsUser = await User.findOne({ email: email })
        if (!existsUser) {
            return NextResponse.json({ msg: 'User does not exits', status: 400 })
        }
        const comparePassword = bcrypt.compareSync(password, existsUser.password)
        if (!comparePassword) {
            return NextResponse.json({ msg: 'Invalid creditionals', status: 400 })
        }
        const response =  NextResponse.json({ msg: 'Account has been created successfully', submit: true, status: 201 })
    
        // set token data
        const createToken = {
            id : existsUser._id,
            username : existsUser.username,
            image: existsUser.image,
            resume:existsUser.resume
        }

        // create token
        const token = jwt.sign(createToken, 'khalid', { expiresIn: '1d' });
        response.cookies.set('token', token, {
            httpOnly: true
        })

          return response
    } catch (error) {
        return NextResponse.json({ msg: 'Account has been created successfully', submit: true, status: 201 })
    }
}