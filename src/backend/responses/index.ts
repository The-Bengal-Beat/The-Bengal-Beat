import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next";

export const ResponsesApi = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const articles = await prisma.article.findMany();

    res.status(200).json({
        data: articles,
        success: true,
        errors: [],
    })
}