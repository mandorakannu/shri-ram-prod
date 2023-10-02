"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const getUser_1 = require("./getUser");
const login_1 = require("./login");
const complain_1 = require("./complain");
const studentDetailsUpdate_1 = require("./studentDetailsUpdate");
const addStudent_1 = require("./addStudent");
const studentRecords_1 = require("./studentRecords");
const removeTeacher_1 = require("./removeTeacher");
const addTeacher_1 = require("./addTeacher");
exports.allRoutes = [
    login_1.authStudentRoute,
    login_1.authTeacherRoute,
    login_1.authAdminRoute,
    getUser_1.getUserRoute,
    complain_1.registerComplainsRoute,
    complain_1.getComplainsRoute,
    studentDetailsUpdate_1.studentDetailsUpdateRoute,
    addStudent_1.addStudentRoute,
    studentRecords_1.getStudentRecordsRoute,
    studentRecords_1.updateStudentRecordsRoute,
    removeTeacher_1.getTeacherRecordsRoute,
    removeTeacher_1.deleteTeacherRecordsRoute,
    addTeacher_1.addTeacherRoute,
];
