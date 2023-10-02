"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentRecordsRoute = exports.getStudentRecordsRoute = void 0;
const express_1 = require("express");
const studentRecords_1 = require("../controllers/studentRecords");
const router = (0, express_1.Router)();
exports.getStudentRecordsRoute = router.get("/api/studentsUpdateRecord", studentRecords_1.getStudentRecords);
exports.updateStudentRecordsRoute = router.post("/api/studentsUpdateRecord", studentRecords_1.updateStudentRecords);
