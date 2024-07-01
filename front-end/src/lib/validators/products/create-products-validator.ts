import { z } from 'zod';

export const CreateProductValidator = z.object({
  title: z.string().min(1, { message: 'This field has to be filled.' }),
  subtitle: z.string().min(1, { message: 'This field has to be filled.' }),
  // price: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number()),
  price: z.string(),
  data: z.string().min(1, { message: 'This field has to be filled.' }),
  lang: z.string().min(1, { message: 'This field has to be filled.' }),
  currency: z.string(),
  categories: z
    .array(z.string())
    .refine((value) => value.some((category) => category), {
      message: 'You have to select at least one category.',
    }),
  distAgent: z.string().optional(),
  amazonLink: z.string().optional(),
  mercadoLibreLink: z.string().optional(),
  rapikomLink: z.string().optional(),
  file:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length == 1, 'File is required.'),
});

export type TCreateProductValidator = z.infer<typeof CreateProductValidator>;
