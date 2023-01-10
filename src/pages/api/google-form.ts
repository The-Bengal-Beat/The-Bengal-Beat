import type { NextApiRequest, NextApiResponse } from "next";

export interface RequestBody {
    text: "hello"
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
    }

    res.status(200).json(req.body as RequestBody)
}