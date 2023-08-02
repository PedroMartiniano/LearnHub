import { Router } from "express"
import { alumnRouter } from "./alumn.routes"
import { staffRouter } from "./staff.routes"

export const router = Router()

router.use('/alumn', alumnRouter)
router.use('/staff', staffRouter)