"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = void 0;
const connection_1 = require("../databases/connection");
const students_1 = require("../models/students");
const numbers_1 = require("../functions/numbers");
const stringGenerator_1 = require("../functions/stringGenerator");
const hashing_1 = require("../functions/hashing");
const addStudent = async (req, res) => {
    const { name, motherName, fatherName, dateOfBirth, age, mobileNumber, className, } = req.body;
    const password = (0, stringGenerator_1.generatePassword)(name, mobileNumber).toLowerCase();
    const uniqueId = (0, stringGenerator_1.generateUniqueId)(name, mobileNumber).toLowerCase();
    const hashPassword = await (0, hashing_1.hashing)(password);
    await (0, connection_1.connectToDatabase)();
    const addUser = await students_1.studentSchema.create({
        name,
        motherName,
        fatherName,
        dateOfBirth,
        age,
        mobileNumber,
        className,
        subjects: {
            english: (0, numbers_1.numbers)(),
            maths: (0, numbers_1.numbers)(),
            science: (0, numbers_1.numbers)(),
            computer: (0, numbers_1.numbers)(),
            hindi: (0, numbers_1.numbers)(),
        },
        password: hashPassword,
        uniqueId,
    });
    if (addUser) {
        res.json({ password, uniqueId });
        res.statusCode = 201;
    }
};
exports.addStudent = addStudent;
