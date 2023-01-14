import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { IArticle } from "./google-form";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = readFileSync("db/db.json", "utf-8")
    const articles = JSON.parse(db) as IArticle[]

    return { articles }
}