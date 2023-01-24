import { z } from "zod";

export const StatusEnum = ["publish", "future", "draft", "pending", "private"] as const
export const PostFromApiSchema = z.object({
    id: z.number(),
    date_gmt: z.string(),
    link: z.string(),
    slug: z.string(),
    status: z.enum(StatusEnum),
    content: z.object({
        rendered: z.string()
    })
})
export const PostArrayFromApiSchema = z.array(PostFromApiSchema)