import { getUserRoute } from "./getUser";
import { authAdminRoute, authStudentRoute, authTeacherRoute } from "./login";
import { registerComplainsRoute, getComplainsRoute } from "./complain";
import { studentDetailsUpdateRoute } from "./studentDetailsUpdate";
import { addStudentRoute } from "./addStudent";
import {
  getStudentRecordsRoute,
  updateStudentRecordsRoute,
} from "./studentRecords";
import {
  getTeacherRecordsRoute,
  deleteTeacherRecordsRoute,
} from "./removeTeacher";
import { addTeacherRoute } from "./addTeacher";

export const allRoutes = [
  authStudentRoute,
  authTeacherRoute,
  authAdminRoute,
  getUserRoute,
  registerComplainsRoute,
  getComplainsRoute,
  studentDetailsUpdateRoute,
  addStudentRoute,
  getStudentRecordsRoute,
  updateStudentRecordsRoute,
  getTeacherRecordsRoute,
  deleteTeacherRecordsRoute,
  addTeacherRoute,
];
