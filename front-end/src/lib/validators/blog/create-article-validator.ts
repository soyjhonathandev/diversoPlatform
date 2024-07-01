import { z } from 'zod';

export const CreateArticleValidator = z.object({
  title: z.string().min(1, { message: 'This field has to be filled.' }),
  description: z.string().min(1, { message: 'This field has to be filled.' }),
  body: z.string().min(1, { message: 'This field has to be filled.' }),
  author: z.string().min(1, { message: 'This field has to be filled.' }),
  language: z.string().min(1, { message: 'This field has to be filled.' }),
  articleStatus: z.string(),
  file:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length == 1, 'File is required.'),
});

export type TCreateArticleValidator = z.infer<typeof CreateArticleValidator>;
