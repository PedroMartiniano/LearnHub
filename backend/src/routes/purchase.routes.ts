import { Router } from "express";
import { CreatePurchaseController } from "../modules/purchase/CreatePurchase/CreatePurchaseController";

export const purchaseRoutes = Router()

const createPurchase = new CreatePurchaseController

purchaseRoutes.post('/purchase/buy/:id_course', (req, res) => {
    createPurchase.handle(req, res)
})