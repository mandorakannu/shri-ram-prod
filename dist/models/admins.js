"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSchema = void 0;
const mongoose_1 = require("mongoose");
const admin = new mongoose_1.Schema({
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
    dateOfBirth: String,
    age: Number,
    password: String,
    uniqueId: String,
    mobileNumber: Number,
    role: String,
});
exports.adminSchema = (0, mongoose_1.model)("Admin", admin);
