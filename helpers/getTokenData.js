'use server'
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const  getTokenData =  async ()=>{
    const cookieStore = cookies()
    const token = await cookieStore.get('token')
    if((!token) || (token ==='')){
        return null
    }
    if(token){
        const data = jwt.verify(token.value, 'khalid')
            return data
    }

}

