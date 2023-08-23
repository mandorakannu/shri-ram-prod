import { getUser } from "@controllers/getUser";
import { Router, IRouter } from "express";
const router: IRouter = Router();

export const getUserRoute = router.get("/getUser/:id", getUser);
