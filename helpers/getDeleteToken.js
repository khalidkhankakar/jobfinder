import { NextResponse } from "next/server"
export const  getDeleteToken = ()=>{
        const repsonse = NextResponse.json({
            msg:"logout successfully"
        })
        repsonse.cookies.set({token: ''})
        return repsonse
}

