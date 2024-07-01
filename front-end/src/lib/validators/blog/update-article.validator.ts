import { z } from 'zod';

export const UpdateArticleValidator = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  body: z.string().optional(),
  author: z.string().optional(),
  language: z.string().optional(),
  articleStatus: z.string(),
  file:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(FileList).optional(),
});

export type TUpdateArticleValidator = z.infer<typeof UpdateArticleValidator>;
