import type { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { PostFromApiSchema } from "../schemas";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type IPostFromApi = z.infer<typeof PostFromApiSchema>