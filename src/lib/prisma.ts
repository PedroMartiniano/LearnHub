import { PrismaClient } from "@prisma/client"
import { query } from "express"

const prisma = new PrismaClient() // {log: ['query', 'error']} dentro dos parenteses, para acusar em qual query ele da o erro quando der

export { prisma }