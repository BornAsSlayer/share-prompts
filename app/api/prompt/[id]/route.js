import { connectToDB } from "@utils/database"
import Prompt from '@models/prompt';

export const GET = async (request,{params}) =>{
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params).populate('creator');

        return new Response(JSON.stringify(prompts),{
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch all Prompts",{
            status:500
        })
    }
}