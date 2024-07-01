import { z } from 'zod';

export const CreateUserValidatorBase = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  passwordConfirm: z.string(),
});

export const CreateProductValidator = CreateUserValidatorBase.refine(
  (data) => data.password === data.passwordConfirm,
  {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  },
);

export type TCreateUserValidatorBase = z.infer<typeof CreateUserValidatorBase>;
export type TCreateUserValidator = z.infer<typeof CreateProductValidator>;
