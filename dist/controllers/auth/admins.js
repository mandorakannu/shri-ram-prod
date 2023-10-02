"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmins = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const admins_1 = require("../../models/admins");
const connection_1 = require("../../databases/connection");
const authAdmins = async (request, response) => {
    const { name, password, uniqueId } = request.body;
    await (0, connection_1.connectToDatabase)();
    const isAdmin = await admins_1.adminSchema.findOne({ uniqueId });
    await (0, connection_1.disconnectFromDatabase)();
    if (!isAdmin) {
        return response.status(400).json({
            message: "Admin not found",
        });
    }
    const isMatch = await bcryptjs_1.default.compare(password, isAdmin.password);
    if (!isMatch) {
        return response.status(400).json({
            message: "Invalid credentials",
        });
    }
    return response.status(200).json({
        message: "Admin logged in successfully",
        name: isAdmin.name,
        uniqueId: isAdmin.uniqueId,
        motherName: isAdmin.motherName,
        fatherName: isAdmin.fatherName,
        dateOfBirth: isAdmin.dateOfBirth,
        age: isAdmin.age,
        mobileNumber: isAdmin.mobileNumber,
        role: isAdmin.role,
    });
};
exports.authAdmins = authAdmins;
