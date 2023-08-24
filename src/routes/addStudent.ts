import { Router, IRouter } from "express";
import { addStudent } from "@controllers/addStudent";
const router: IRouter = Router();

export const addStudentRoute = router.post("/api/addStudent", addStudent);
