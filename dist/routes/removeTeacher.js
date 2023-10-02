"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacherRecordsRoute = exports.getTeacherRecordsRoute = void 0;
const removeTeacher_1 = require("../controllers/removeTeacher");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.getTeacherRecordsRoute = router.get("/admin/findTeacher/:id", removeTeacher_1.getTeacherRecords);
exports.deleteTeacherRecordsRoute = router.delete("/admin/deleteTeacher/:id", removeTeacher_1.removeTeacher);
