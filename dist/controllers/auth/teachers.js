"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTeacher = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const teachers_1 = require("../../models/teachers");
const connection_1 = require("../../databases/connection");
const authTeacher = async (request, response) => {
    const { name, password, uniqueId } = request.body;
    await (0, connection_1.connectToDatabase)();
    const isTeacher = await teachers_1.teacherSchema.findOne({ uniqueId });
    await (0, connection_1.disconnectFromDatabase)();
    if (!isTeacher) {
        return response.status(400).json({
            message: "Teacher not found",
        });
    }
    const isMatch = await bcryptjs_1.default.compare(password, isTeacher.password);
    if (!isMatch) {
        return response.status(400).json({
            message: "Invalid credentials",
        });
    }
    return response.status(200).json({
        message: "Teacher logged in successfully",
        name: isTeacher.name,
        uniqueId: isTeacher.uniqueId,
        motherName: isTeacher.motherName,
        fatherName: isTeacher.fatherName,
        dateOfBirth: isTeacher.dateOfBirth,
        age: isTeacher.age,
        mobileNumber: isTeacher.mobileNumber,
        role: isTeacher.role,
        qualification: isTeacher.qualification,
        SubjectProfile: isTeacher.SubjectProfile,
    });
};
exports.authTeacher = authTeacher;
