import { getUserRoute } from "./getUser";
import { authAdminRoute, authStudentRoute, authTeacherRoute } from "./login";

export const allRoutes = [
  authStudentRoute,
  authTeacherRoute,
  authAdminRoute,
  getUserRoute,
];
