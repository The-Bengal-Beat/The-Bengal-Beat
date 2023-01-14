import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { PrismaClient } from '@prisma/client'


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
        try {
            const prisma = new PrismaClient()
            prisma.article.create({ data: req.body })
            
            res.status(200).json({
                data: [req.body],
                success: true,
                errors: [],
    
            });
        } catch (err) {
            res.status(400).json({
                data: [],
                success: false,
                errors: [{
                    message: "Prisma error"
                }]
            })
        }
    } else res.status(400).json({
        data: [],
        success: false,
        errors: [{
            message: 'Incorrect request pattern'
        }]
    })
}