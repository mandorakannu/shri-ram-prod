"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTeacherRoute = void 0;
const express_1 = require("express");
const addTeachers_1 = require("../controllers/addTeachers");
const router = (0, express_1.Router)();
exports.addTeacherRoute = router.post("/admin/addTeacher", addTeachers_1.addTeacher);
