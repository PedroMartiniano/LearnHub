import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import { router } from "./routes"
import "express-async-errors"
import { AppError } from "./error/AppError"
import morgan from "morgan"

export const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    else {
        return res.status(500).json({ success: false, message: `Internal server error - ${err.message}` })
    }
})