import type { z } from "zod";
import type { RequestSchema } from "./schema";

export type IArticle = z.infer<typeof RequestSchema>