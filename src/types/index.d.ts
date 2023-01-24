import type { Dispatch, SetStateAction } from "react";

export type State<T> = [T, Dispatch<SetStateAction<T>>]
export type Status = "publish" | "future" | "draft" | "pending" | "private"
export type IPostFromApi = {
    id: number;
    date_gmt: string;
    link: string;
    slug: string;
    status: Status;
    content: {
        rendered: string;
    }
}