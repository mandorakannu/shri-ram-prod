import { studentDetailsUpdate } from "@controllers/studentDetailsUpdate";
import { Router, IRouter } from "express";
const router: IRouter = Router();

export const studentDetailsUpdateRoute = router.post(
  "/api/studentUpdateDetails",
  studentDetailsUpdate
);
