import axios from "axios";
import { PostArrayFromApiSchema } from "../schemas";
import type { IHeaders, IPostFromApi } from "../types";

export interface IApiOutput {
    data: IPostFromApi[];
    headers?: IHeaders;
    error: string;
}

export const getDataFromApi = async () => {
    const response = await axios.get("https://thebengalbeat.com/wp-json/wp/v2/posts?per_page=20")
    
    // parsing
    const parsed = PostArrayFromApiSchema.safeParse(response.data)
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