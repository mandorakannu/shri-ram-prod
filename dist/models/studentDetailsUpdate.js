"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDetailsUpdateSchema = void 0;
const mongoose_1 = require("mongoose");
const studentDetailsUpdate = new mongoose_1.Schema({
    id: String,
    name: String,
    motherName: String,
    fatherName: String,
    dateOfBirth: String,
    age: Number,
    password: String,
    uniqueId: String,
    mobileNumber: Number,
    newName: String,
    newMotherName: String,
    newFatherName: String,
    newDateOfBirth: String,
    newAge: Number,
});
exports.studentDetailsUpdateSchema = (0, mongoose_1.model)("studentDetailsUpdate", studentDetailsUpdate);
