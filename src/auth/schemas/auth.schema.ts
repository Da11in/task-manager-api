import { z } from 'zod';

export const createTokenSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type CreateTokenDto = z.infer<typeof createTokenSchema>;
