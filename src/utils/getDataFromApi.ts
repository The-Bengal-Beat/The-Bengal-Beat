import axios from "axios";
import { PostArrayFromApiSchema } from "../schemas";
import type { IHeaders, IPostFromApi } from "../types";

export interface IApiOutput {
    posts: IPostFromApi[];
    headers?: IHeaders;
    error: string;
}

export const getDataFromApi = async (page: number): Promise<IApiOutput> => {
    const response = await axios.get(`https://thebengalbeat.com/wp-json/wp/v2/posts?per_page=20?page=${page}`)
    
    // parsing
    const parsed = PostArrayFromApiSchema.safeParse(response.data)
    if (parsed.success) {
        return  {
            posts: parsed.data,
            headers: response.headers,
            error: "",
        }
    } else return {
        posts: [],
        error: parsed.error.message,
    }
}