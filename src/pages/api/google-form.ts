import type { NextApiRequest, NextApiResponse } from "next";

export type ICategory =
    "Athletics" |
    "Bengal Buzz" |
    "Entertainment" |
    "Gen Z" |
    "Features & Fashion" |
    "News in Town" |
    "Senior Spotlight" |
    "Nature";

export interface IRequestBody {
    name: string;
    title: string;
    link: string;
    category: ICategory;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
    }

    try {
        res.status(200).json({ ...req.body as IRequestBody })
    } catch {
        res.status(400).send("Incorrect body")
    }
}