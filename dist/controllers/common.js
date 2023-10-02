"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmins = exports.authTeacher = exports.authStudent = void 0;
const students_1 = require("./auth/students");
Object.defineProperty(exports, "authStudent", { enumerable: true, get: function () { return students_1.authStudent; } });
const teachers_1 = require("./auth/teachers");
Object.defineProperty(exports, "authTeacher", { enumerable: true, get: function () { return teachers_1.authTeacher; } });
const admins_1 = require("./auth/admins");
Object.defineProperty(exports, "authAdmins", { enumerable: true, get: function () { return admins_1.authAdmins; } });
