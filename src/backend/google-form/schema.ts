import { z } from "zod";

export const CategoryEnum = [
    "Athletics",
    "Bengal Buzz",
    "Entertainment",
    "Gen Z",
    "Features & Fashion",
    "News in Town",
    "Senior Spotlight",
    "Nature",
    ""
] as const;

export const RequestSchema = z.object({
    name: z.string(),
    title: z.string(),
    text: z.string(),
    category: z.enum(CategoryEnum).default("")
})