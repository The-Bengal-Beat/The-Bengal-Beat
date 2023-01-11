import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

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
        console.log("Requested")
        res.status(200).json({ 
            data: [],
            success: true,
            errors: []
        });
    } else res.status(400).json({
        data: [],
        success: false,
        errors: [{
            message: 'Incorrect request pattern'
        }]
    })
}