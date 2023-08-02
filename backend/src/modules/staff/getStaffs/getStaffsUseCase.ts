import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetStaffsUseCase {
    async execute(res: Response) {
        try {
            const staffs = await prisma.staff.findMany()

            return res.status(200).json(staffs)

        } catch {
            return res.status(400).json(null)
        }
    }
}
