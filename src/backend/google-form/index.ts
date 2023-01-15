import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { RequestSchema } from "./schema";
import { IArticle } from "./types";

export const GoogleFormApi = async (req: NextApiRequest, res: NextApiResponse) => {
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
            await prisma.article.create({ data: req.body as IArticle })
            
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