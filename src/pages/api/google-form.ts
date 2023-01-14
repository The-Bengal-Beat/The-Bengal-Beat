import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { readFileSync, writeFileSync } from "fs";

export const CategoryEnum = [
    "Athletics",
    "Bengal Buzz",
    "Entertainment",
    "Gen Z",
    "Features & Fashion",
    "News in Town",
    "Senior Spotlight",
    "Nature"
] as const;

export const RequestSchema = z.object({
    name: z.string(),
    title: z.string(),
    link: z.string(),
    category: z.enum(CategoryEnum)
})

export type IArticle = z.infer<typeof RequestSchema>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({
            data: [],
            success: false,
            errors: [{
                message: 'Only POST requests allowed'
            }]
        })
    }

    if (RequestSchema.safeParse(req.body).success) {
        const db = readFileSync("db/db.json", "utf-8")
        const articles = JSON.parse(db) as IArticle[];
        articles.push(req.body as IArticle);

        const articlesAsJson = JSON.stringify(articles);
        writeFileSync("db/db.json", articlesAsJson, "utf-8")

        res.status(200).json({
            data: [req.body],
            success: true,
            errors: [],

        });
    } else res.status(400).json({
        data: [],
        success: false,
        errors: [{
            message: 'Incorrect request pattern'
        }]
    })
}