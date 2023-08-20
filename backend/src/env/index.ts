import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    TOKENKEYALUMN: z.string(),
    TOKENKEYSTAFF: z.string(),
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev')
})

const _env = envSchema.safeParse(process.env)

if(!_env.success){
    throw new Error('invalid environment variables')
}

export const env = _env.data