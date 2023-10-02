"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authStudent = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const students_1 = require("../../models/students");
const connection_1 = require("../../databases/connection");
const authStudent = async (request, response) => {
    const { name, password, uniqueId } = request.body;
    await (0, connection_1.connectToDatabase)();
    const isStudent = await students_1.studentSchema.findOne({ uniqueId });
    await (0, connection_1.disconnectFromDatabase)();
    if (!isStudent) {
        return response.status(400).json({
            message: "Student not found",
        });
    }
    const isMatch = await bcryptjs_1.default.compare(password, isStudent.password);
    if (!isMatch) {
        return response.status(400).json({
            message: "Invalid credentials",
        });
    }
    return response.status(200).json({
        message: "Student logged in successfully",
        name: isStudent.name,
        uniqueId: isStudent.uniqueId,
        motherName: isStudent.motherName,
        fatherName: isStudent.fatherName,
        dateOfBirth: isStudent.dateOfBirth,
        age: isStudent.age,
        className: isStudent.className,
        mobileNumber: isStudent.mobileNumber,
        role: isStudent.role,
        subjects: isStudent.subjects,
    });
};
exports.authStudent = authStudent;
