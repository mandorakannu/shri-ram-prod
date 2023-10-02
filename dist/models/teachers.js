"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSchema = void 0;
const mongoose_1 = require("mongoose");
const teacher = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    qualification: String,
    dateOfBirth: String,
    age: Number,
    SubjectProfile: String,
    password: String,
    uniqueId: String,
    mobileNumber: Number,
    role: String,
});
exports.teacherSchema = (0, mongoose_1.model)("teachers", teacher);
