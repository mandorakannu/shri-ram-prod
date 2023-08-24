import { getTeacherRecords, removeTeacher } from "@controllers/removeTeacher";
import { Router, IRouter } from "express";
const router: IRouter = Router();

export const getTeacherRecordsRoute = router.get(
  "/admin/findTeacher/:id",
  getTeacherRecords
);
export const deleteTeacherRecordsRoute = router.delete(
  "/admin/deleteTeacher/:id",
  removeTeacher
);
