import type { AxiosResponseHeaders } from "axios";
import type { Dispatch, SetStateAction } from "react";
import type { z } from "zod";
import type { PostSchema } from "../schemas";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type IPost = z.infer<typeof PostSchema>
export type ICategory = z.infer<typeof CategoryFromApiSchema>
export type IHeaders = AxiosResponseHeaders | Partial<Record<string, string> & {
    "set-cookie"?: string[] | undefined;
    "X-WP-Total"?: string
}>
export type IApiOutput<T> = {
    data: T;
    headers?: IHeaders;
    error: string;
}
