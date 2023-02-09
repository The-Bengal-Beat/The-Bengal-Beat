import axios from "axios";
import { CategoryArraySchema } from "../schema";
import type { IApiOutput, ICategory } from "../types";

export type IGetCategoriesResponse = IApiOutput<ICategory[]>

export const getCategories = async (): Promise<IGetCategoriesResponse> => {
    const response = await axios.get(`https://thebengalbeat.com/wp-json/wp/v2/categories?per_page=100`)
    
    // parsing
    const parsed = CategoryArraySchema.safeParse(response.data)
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