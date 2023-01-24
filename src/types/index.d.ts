import type { Dispatch, SetStateAction } from "react";
import { PostFromApiSchema } from "../schemas";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type IPostFromApi = z.infer<typeof PostFromApiSchema>