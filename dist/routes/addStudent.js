"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudentRoute = void 0;
const express_1 = require("express");
const addStudent_1 = require("../controllers/addStudent");
const router = (0, express_1.Router)();
exports.addStudentRoute = router.post("/api/addStudent", addStudent_1.addStudent);
