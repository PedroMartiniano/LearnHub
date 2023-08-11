import { Router } from "express"
import { alumnRouter } from "./alumn.routes"
import { staffRouter } from "./staff.routes"
import { usersRouter } from "./users.routes"
import { getMeStaffRouter } from "./meStaff.routes"
import { courseRouter } from "./course.routes"
import { modulesRouter } from "./modules.routes"
import { testsRouter } from "./testsModules.routes"
import { getMeAlumnRouter } from "./meAlumn.routes"
import { purchaseRoutes } from "./purchase.routes"
import { alumnAnswerRoutes } from "./alumnAnswers.routes"

export const router = Router()

router.use('/alumn', alumnRouter, purchaseRoutes, alumnAnswerRoutes)
router.use('/staff', staffRouter)
router.use('/users', usersRouter)
router.use('/get-me-staff', getMeStaffRouter)
router.use('/get-me-alumn', getMeAlumnRouter)
router.use('/course', courseRouter, modulesRouter, testsRouter)