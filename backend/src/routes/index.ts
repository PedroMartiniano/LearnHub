import { Router } from "express"
import { alumnRouter } from "./alumn.routes"

export const router = Router()

router.use('/alumn', alumnRouter)