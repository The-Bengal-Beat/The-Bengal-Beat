import axios from "axios";
import { PostSchema } from "../schema";
import type { IApiOutput, IPost } from "../types";

export type IGetPostResponse = IApiOutput<IPost>

export const getPost = async (id: string): Promise<IGetPostResponse> => {
    const url = `https://thebengalbeat.com/wp-json/wp/v2/posts/${id}`
    const response = await axios.get(url)
    
    // parsing
    const parsed = PostSchema.safeParse(response.data)
    if (parsed.success) {
        return  {
            data: parsed.data,
            headers: response.headers,
            error: "",
        }
    } else return {
        data: {} as IPost,
        error: parsed.error.message,
    }
}