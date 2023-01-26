import type { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { PostFromApiSchema } from "../schemas";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type IPostFromApi = z.infer<typeof PostFromApiSchema>
export type IHeaders = AxiosResponseHeaders | Partial<Record<string, string> & {
    "set-cookie"?: string[] | undefined;
}>