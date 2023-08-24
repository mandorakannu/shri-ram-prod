import { Router, IRouter } from "express";
import { registerComplains, getComplains } from "@controllers/complain";
const router: IRouter = Router();

export const registerComplainsRoute = router.post("/complain", registerComplains);
export const getComplainsRoute = router.get("/api/getComplains", getComplains);
