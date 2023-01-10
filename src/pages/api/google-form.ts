import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ 
            data: [],
            errors: [{
                message: 'Only POST requests allowed'
            }]
        })
    }

    const body = JSON.parse(req.body as string)
    res.status(200).json({ ...body })
}