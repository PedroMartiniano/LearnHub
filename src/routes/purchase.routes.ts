import { Router } from "express";
import { GetPurchasesByAlumnController } from "../modules/purchase/getPurchases/GetPurchasesByAlumnController";
import { CancelPurchaseController } from "../modules/purchase/cancelPurchase/CancelPurchaseController";
import { CreatePurchaseController } from "../modules/purchase/CreatePurchase/CreatePurchaseController";

export const purchaseRoutes = Router()

const createPurchase = new CreatePurchaseController
const getAlumnPurchases = new GetPurchasesByAlumnController
const cancelPurchase = new CancelPurchaseController

purchaseRoutes.post('/purchase/buy/:id_course', (req, res) => {
    createPurchase.handle(req, res)
})

purchaseRoutes.get('/purchase/alumn/get', (req, res) => {
    getAlumnPurchases.handle(req, res)
})

purchaseRoutes.delete('/purchase/cancel/:id_course', (req, res) => {
    cancelPurchase.handle(req, res)
})