import { z } from 'zod';
import { CreateUserValidatorBase } from './createUser-validator';

export const CreateUserWithRoleValidatorBase = CreateUserValidatorBase.extend({
  role: z.string().min(1, { message: 'Role is required.' }),
});

export const CreateUserWithRoleValidator =
  CreateUserWithRoleValidatorBase.refine(
    (data) => data.password === data.passwordConfirm,
    {
      message: 'Passwords do not match',
      path: ['passwordConfirm'],
    },
  );

export type CreateUserWithRoleValidator = z.infer<
  typeof CreateUserWithRoleValidatorBase
>;
export type TCreateUserWithRoleValidator = z.infer<
  typeof CreateUserWithRoleValidator
>;
