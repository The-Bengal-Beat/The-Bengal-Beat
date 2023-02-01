import axios from "axios";
import { PostArraySchema } from "../schemas";
import type { IApiOutput, IPost } from "../types";

export type IGetPostsResponse = IApiOutput<IPost[]>

export const getPosts = async (page = 1, perPage = 10): Promise<IGetPostsResponse> => {
    const response = await axios.get(`https://thebengalbeat.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`)
    
    // parsing
    const parsed = PostArraySchema.safeParse(response.data)
    if (parsed.success) {
        return  {
            data: parsed.data,
            headers: response.headers,
            error: "",
        }
    } else return {
        data: [],
        error: parsed.error.message,
    }
}