import { Response , Request } from "express"
import { Configuration , OpenAIApi } from "openai"
import dotenv from "dotenv"

dotenv.config()

const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(config)

const generateImage = async ( req:Request, res:Response)=>{
    const {prompt} = req.body 
    console.log('check prompt:', prompt)
    // const prompt = 'cute baby'

    try {
        const response = await openai.createImage({
            prompt: prompt,
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