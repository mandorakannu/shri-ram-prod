import { Router, IRouter } from "express";
import { addTeacher } from "@controllers/addTeachers";
const router: IRouter = Router();

export const addTeacherRoute = router.post("/admin/addTeacher", addTeacher);
