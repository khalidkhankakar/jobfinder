'use server'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import { v4 as uuidv4 } from 'uuid';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';
  


cloudinary.config({ 
  cloud_name: 'dlrsia1d3', 
  api_key: '594282114385258', 
  api_secret: 'T5koWKjF6bfsMytuadxDWpQ3E0E'
});



export async function uploadPhotoCloundniary(file){
  return cloudinary.v2.uploader.upload(file.filePath, {folder: "profileImage"})
}


export async function saveToPhotoLocal(formData){
    const file = formData.get('file')
    const singleBuffer = await file.arrayBuffer()
    .then((data)=>{
        const buffer = Buffer.from(data)
        const name = uuidv4();
        const extension = file.type.split('/')[1]
        // <<<------------------------!!!-------------------------->>>
        // This method will not work on vercel server
        // const uploadDir = path.join(process.cwd(), "public", `/${file.name}.${extension}`)
        // fs.writeFile(uploadDir, buffer)
        // <<<------------------------!!!-------------------------->>>



        // This method will work on vercel server
        const tempDir = os.tmpdir();
        console.log(tempDir)
        const uploadDir = path.join(tempDir,  `/${file.name}.${extension}`)
        fs.writeFile(uploadDir, buffer)
        return {filePath: uploadDir, fileName : file.name}
    })

    return await singleBuffer
}


export async function uploadPhoto(formData){
const localPhoto = await saveToPhotoLocal(formData)
const cloudPhoto = await uploadPhotoCloundniary(localPhoto)
// console.log("----", cloudPhoto);
fs.unlink(localPhoto.filePath)
revalidatePath('/')
return {upload : 'upload successfully'}
}
export async function getPhoto(){
  const {resources} = await cloudinary.v2.search.expression('folder:profileImage/*').sort_by('created_at', 'desc').max_results(1).execute()
  // console.log( "-----",resources)
  return resources
  }