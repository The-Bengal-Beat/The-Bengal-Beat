import axios from "axios";
import { PostArrayFromApiSchema } from "../schemas";
import type { IPostFromApi } from "../types";

export interface IApiOutput {
    data: IPostFromApi[],
    error: string
}

export const getDataFromApi = async () => {
    const response = await axios.get("https://thebengalbeat.com/wp-json/wp/v2/posts?per_page=1000")
    
    // parsing
    const parsed = PostArrayFromApiSchema.safeParse(response.data)
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