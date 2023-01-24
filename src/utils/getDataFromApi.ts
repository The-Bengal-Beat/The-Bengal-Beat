import axios from "axios";
import { PostArrayFromApiSchema } from "../schemas";
import type { IPostFromApi } from "../types";

interface IOutput {
    data: IPostFromApi[],
    error: string
}

export const getDataFromApi = async (): Promise<IOutput> => {
    const response = await axios.get("https://thebengalbeat.com/wp-json/wp/v2/posts")
    
    // parsing
    const parsed = PostArrayFromApiSchema.safeParse(response)
    if (parsed.success) {
        return  {
            data: parsed.data,
            error: "",
        }
    } else return {
        data: [],
        error: parsed.error.message,
    }
}