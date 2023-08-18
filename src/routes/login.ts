import { Router, IRouter } from "express";
import { authStudent, authTeacher, authAdmins } from "@controllers/common";
const router: IRouter = Router();

export const authStudentRoute = router.post("/auth/students", authStudent);
export const authTeacherRoute = router.post("/auth/teacher", authTeacher);
export const authAdminRoute = router.post("/auth/admin", authAdmins);
