import { z } from "zod";

export const StatusEnum = ["publish", "future", "draft", "pending", "private"] as const
export const PostSchema = z.object({
    id: z.number(),
    date_gmt: z.string(),
    link: z.string(),
    slug: z.string(),
    status: z.enum(StatusEnum),
    content: z.object({
        rendered: z.string()
    }),
    title: z.object({
        rendered: z.string()
    }),
    custom_fields: z.object({
        writer: z.array(z.string()).optional()
    })
})
export const PostArraySchema = z.array(PostSchema)
export const CategorySchema = z.object({
    id: z.number(),
    link: z.string(),
    slug: z.string(),
    name: z.string(),
})
export const CategoryArraySchema = z.array(CategorySchema)