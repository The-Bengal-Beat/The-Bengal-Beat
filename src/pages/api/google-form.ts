import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ 
            data: [],
            errors: [{
                message: 'Only POST requests allowed'
            }]
        })
    }


    res.status(200).json(req.body)
}