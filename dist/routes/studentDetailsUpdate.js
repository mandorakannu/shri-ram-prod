"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDetailsUpdateRoute = void 0;
const studentDetailsUpdate_1 = require("../controllers/studentDetailsUpdate");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.studentDetailsUpdateRoute = router.post("/api/studentUpdateDetails", studentDetailsUpdate_1.studentDetailsUpdate);
