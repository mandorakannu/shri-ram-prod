"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDetailsUpdate = void 0;
const studentDetailsUpdate_1 = require("../models/studentDetailsUpdate");
const connection_1 = require("../databases/connection");
const studentDetailsUpdate = async (request, response) => {
    const { name, motherName, fatherName, age, dateOfBirth, uniqueId, oldName, oldMotherName, oldFatherName, oldAge, oldDateOfBirth, } = request.body;
    await (0, connection_1.connectToDatabase)();
    const user = await studentDetailsUpdate_1.studentDetailsUpdateSchema.create({
        newMotherName: motherName,
        newFatherName: fatherName,
        newAge: age,
        newDateOfBirth: dateOfBirth,
        uniqueId,
        newName: name,
        name: oldName === undefined ? "" : oldName,
        motherName: oldMotherName === undefined ? "" : oldMotherName,
        fatherName: oldFatherName === undefined ? "" : oldFatherName,
        age: oldAge === undefined ? "" : oldAge,
        dateOfBirth: oldDateOfBirth === undefined ? "" : oldDateOfBirth,
    });
    if (user) {
        response.status(200).json("Student Details Updated Successfully");
        await (0, connection_1.disconnectFromDatabase)();
    }
    else {
        response.status(400).json("Student Details Not Updated");
        await (0, connection_1.disconnectFromDatabase)();
    }
};
exports.studentDetailsUpdate = studentDetailsUpdate;
