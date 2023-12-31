import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(10, 'Password must be at least 10 characters long'),
    confirmPassword: z
      .string()
      .min(10, 'Password must be at least 10 characters long'),
    acceptTerms: z
      .boolean()
      .refine((value) => value, 'You must agree to the terms')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

export type TRegisterSchema = z.infer<typeof registerSchema>
