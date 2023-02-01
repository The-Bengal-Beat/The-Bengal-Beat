import axios from "axios";
import { PostArraySchema } from "../schemas";
import type { IApiOutput, IPost } from "../types";

export type IGetPostsResponse = IApiOutput<IPost[]>
export type IGetPostsProps = {
    page?: number;
    per_page?: number;
    category?: string;
}

export const getPosts = async ({page = 1, per_page = 10, category = ""}: IGetPostsProps): Promise<IGetPostsResponse> => {
    const url = `https://thebengalbeat.com/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}&category=${category}`
    const response = await axios.get(url)
    
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