import { z, defineCollection } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    tags: z.array(z.string()),
  }),
});

const personal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  work,
  personal,
};
