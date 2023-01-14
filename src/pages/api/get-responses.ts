import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const articles = await prisma.article.findMany();

    res.status(200).json({
        data: [ ...articles ],
        success: true,
        errors: [],
    })
}