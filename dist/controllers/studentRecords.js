"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentRecords = exports.getStudentRecords = void 0;
const students_1 = require("../models/students");
const studentDetailsUpdate_1 = require("../models/studentDetailsUpdate");
const connection_1 = require("../databases/connection");
const getStudentRecords = async (request, response) => {
    await (0, connection_1.connectToDatabase)();
    const studentRecords = await studentDetailsUpdate_1.studentDetailsUpdateSchema.find({});
    response.json(studentRecords).status(200);
};
exports.getStudentRecords = getStudentRecords;
const updateStudentRecords = async (request, response) => {
    const { uniqueId, name, fatherName, mobileNumber, motherName, dateOfBirth, age, } = request.body;
    await (0, connection_1.connectToDatabase)();
    const changeUser = await studentDetailsUpdate_1.studentDetailsUpdateSchema.findOne({ uniqueId });
    if (changeUser) {
        const user = await students_1.studentSchema.updateOne({ uniqueId }, {
            $set: {
                name,
                fatherName,
                mobileNumber,
                motherName,
                dateOfBirth,
                age,
            },
        });
        if (user) {
            response.json("Student Record Updated").status(200);
            await studentDetailsUpdate_1.studentDetailsUpdateSchema.deleteOne({ uniqueId });
            await (0, connection_1.disconnectFromDatabase)();
        }
        else {
            response.json("Student Record Not Updated").status(400);
            await (0, connection_1.disconnectFromDatabase)();
        }
    }
};
exports.updateStudentRecords = updateStudentRecords;
