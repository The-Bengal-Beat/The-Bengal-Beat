import { z } from "zod";
import { RequestSchema } from "./schema";

export type IArticle = z.infer<typeof RequestSchema>