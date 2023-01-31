import type { AxiosResponseHeaders } from "axios";
import type { Dispatch, SetStateAction } from "react";
import type { z } from "zod";
import type { PostFromApiSchema } from "../schemas";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type IPostFromApi = z.infer<typeof PostFromApiSchema>
export type IHeaders = AxiosResponseHeaders | Partial<Record<string, string> & {
    "set-cookie"?: string[] | undefined;
    "X-WP-Total"?: string
}>