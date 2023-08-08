import { Router } from "express"
import { alumnRouter } from "./alumn.routes"
import { staffRouter } from "./staff.routes"
import { usersRouter } from "./users.routes"
import { getMeRouter } from "./me.routes"
import { courseRouter } from "./course.routes"
import { modulesRouter } from "./modules.routes"
import { testsRouter } from "./testsModules.routes"

export const router = Router()

router.use('/alumn', alumnRouter)
router.use('/staff', staffRouter)
router.use('/users', usersRouter, getMeRouter)
router.use('/course', courseRouter, modulesRouter, testsRouter)