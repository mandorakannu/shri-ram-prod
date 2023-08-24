import { Router, IRouter } from "express";
import {
  getStudentRecords,
  updateStudentRecords,
} from "@controllers/studentRecords";
const router: IRouter = Router();

export const getStudentRecordsRoute = router.get(
  "/api/studentsUpdateRecord",
  getStudentRecords
);
export const updateStudentRecordsRoute = router.post(
  "/api/studentsUpdateRecord",
  updateStudentRecords
);
