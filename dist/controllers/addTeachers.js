"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTeacher = void 0;
const connection_1 = require("../databases/connection");
const teachers_1 = require("../models/teachers");
const stringGenerator_1 = require("../functions/stringGenerator");
const hashing_1 = require("../functions/hashing");
const addTeacher = async (request, response) => {
    const { name, motherName, fatherName, dateOfBirth, qualification, age, SubjectProfile, mobileNumber, } = request.body;
    const uniqueId = (0, stringGenerator_1.generateUniqueId)(name, mobileNumber).toLowerCase();
    const password = (0, stringGenerator_1.generatePassword)(name, mobileNumber).toLowerCase();
    await (0, connection_1.connectToDatabase)();
    const teacher = await teachers_1.teacherSchema.findOne({ name });
    if (teacher) {
        response.status(400).json("Teacher Already Exists");
        await (0, connection_1.disconnectFromDatabase)();
    }
    else {
        const hashPassword = await (0, hashing_1.hashing)(password);
        const newTeacher = await teachers_1.teacherSchema.create({
            name,
            motherName,
            fatherName,
            dateOfBirth,
            qualification,
            age,
            SubjectProfile,
            mobileNumber,
            uniqueId,
            password: hashPassword,
        });
        if (!newTeacher) {
            response.status(400).json("Teacher Already Exists");
            await (0, connection_1.disconnectFromDatabase)();
        }
        else {
            response.status(200).json({ uniqueId, password });
            await (0, connection_1.disconnectFromDatabase)();
        }
    }
};
exports.addTeacher = addTeacher;
