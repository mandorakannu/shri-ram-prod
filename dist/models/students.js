"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
const student = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    dateOfBirth: String,
    age: Number,
    className: String,
    password: String,
    uniqueId: String,
    mobileNumber: Number,
    role: String,
    subjects: {
        english: Number,
        hindi: Number,
        maths: Number,
        science: Number,
        computer: Number,
    },
});
exports.studentSchema = (0, mongoose_1.model)("students", student);
