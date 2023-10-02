"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeacherRecords = exports.removeTeacher = void 0;
const teachers_1 = require("../models/teachers");
const connection_1 = require("../databases/connection");
const removeTeacher = async (request, response) => {
    const uniqueId = request.params.id;
    await (0, connection_1.connectToDatabase)();
    const teacher = await teachers_1.teacherSchema.findOne({ uniqueId });
    if (teacher) {
        await teachers_1.teacherSchema.deleteOne({ uniqueId });
        response.json("Teacher Removed").status(200);
        await (0, connection_1.disconnectFromDatabase)();
    }
    else {
        response.json("Teacher Not Found").status(400);
        await (0, connection_1.disconnectFromDatabase)();
    }
};
exports.removeTeacher = removeTeacher;
const getTeacherRecords = async (request, response) => {
    //
    const teacher = request.params.id;
    const uniqueId = teacher.split("-")[0];
    await (0, connection_1.connectToDatabase)();
    const teacherRecords = await teachers_1.teacherSchema.findOne({ uniqueId });
    response
        .json({
        name: teacherRecords === null || teacherRecords === void 0 ? void 0 : teacherRecords.name,
        mobileNumber: teacherRecords === null || teacherRecords === void 0 ? void 0 : teacherRecords.mobileNumber,
        SubjectProfile: teacherRecords === null || teacherRecords === void 0 ? void 0 : teacherRecords.SubjectProfile,
    })
        .status(200);
};
exports.getTeacherRecords = getTeacherRecords;
