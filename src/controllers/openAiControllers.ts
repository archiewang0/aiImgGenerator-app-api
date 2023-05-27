import { Response , Request } from "express"
import { Configuration , OpenAIApi } from "openai"
import dotenv from "dotenv"

dotenv.config()

const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(config)

interface generateImageRequestProps extends Request{
    body:{
        prompt: string,
        n: number
        size: '256x256' | '512x512' | '1024x1024'
    }
}

const generateImage = async ( req:generateImageRequestProps, res:Response)=>{
    const {prompt, n, size} = req.body 
    console.log('check prompt:', prompt)

    try {
        const response = await openai.createImage({
            prompt,
            n,
            size
        })

        const image_result = response.data.data 
        
        res.status(200).json({
            success: true,
            data: image_result
        })

    } catch (err) {
        console.log(err)
    }


}

export {generateImage}