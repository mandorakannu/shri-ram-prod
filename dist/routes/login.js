"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminRoute = exports.authTeacherRoute = exports.authStudentRoute = void 0;
const express_1 = require("express");
const common_1 = require("../controllers/common");
const router = (0, express_1.Router)();
exports.authStudentRoute = router.post("/auth/students", common_1.authStudent);
exports.authTeacherRoute = router.post("/auth/teacher", common_1.authTeacher);
exports.authAdminRoute = router.post("/auth/admin", common_1.authAdmins);
