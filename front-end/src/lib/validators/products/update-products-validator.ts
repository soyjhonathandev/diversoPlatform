import { z } from 'zod';

export const UpdateProductValidator = z.object({
  title: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .optional(),
  subtitle: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .optional(),
  // price: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number()),
  price: z.string().optional(),
  data: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .optional(),
  currency: z.string().optional(),
  categories: z
    .array(z.string())
    .optional()
    .nullable()
    .refine((value) => !value || value.some((category) => category), {
      message:
        'You have to select at least one category if categories is provided.',
    }),
  distAgent: z.string().optional(),
  amazonLink: z.string().optional(),
  mercadoLibreLink: z.string().optional(),
  rapikomLink: z.string().optional(),
  file:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(FileList).optional(),
  // .refine((file) => !file || file.length === 1, {
  //   message: 'File is required if provided.',
  // }),
});

export type TUpdateProductValidator = z.infer<typeof UpdateProductValidator>;
