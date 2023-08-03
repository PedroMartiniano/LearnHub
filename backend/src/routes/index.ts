import { Router } from "express"
import { alumnRouter } from "./alumn.routes"
import { staffRouter } from "./staff.routes"
import { usersRouter } from "./users.routes"

export const router = Router()

router.use('/alumn', alumnRouter)
router.use('/staff', staffRouter)
router.use('/users', usersRouter)