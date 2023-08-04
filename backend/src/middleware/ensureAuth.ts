import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import "dotenv";
import { AppError } from "../error/AppError";

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing!")
    }

    const [, token] = authHeader.split(" ")

    try {
        const key: string | undefined = process.env.tokenkey

        if (!key) {
            throw new Error("Key Token is missing")
        }

        const response = verify(token, key) as {id: string, id_user: string}
        req.body.id = response.id
        req.body.id_user = response.id_user
        next()
    } catch {
        throw new AppError("Something went wrong")
    }
}