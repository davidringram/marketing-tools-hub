import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    bucket: z.enum(['SEO', 'Ops', 'Automation', 'Ads', 'Analytics', 'Social', 'AI', 'CRO', 'Email', 'Project Management', 'Content Creation', 'Video/Audio', 'Web Dev', 'Graphic Design', 'Admin']),
    url: z.string().url(),
    cost: z.string().optional(),
    // CHANGE THIS:
    company: z.string().default('DIM&C'), // Default to your firm if blank
    description: z.string(),
  }),
});

export const collections = { tools };