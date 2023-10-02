"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const connection_1 = require("../databases/connection");
const students_1 = require("../models/students");
const teachers_1 = require("../models/teachers");
const admins_1 = require("../models/admins");
const getUser = async (request, response) => {
    await (0, connection_1.connectToDatabase)();
    const isUser = await Promise.all([
        students_1.studentSchema.findOne({ uniqueId: request.params.id }),
        teachers_1.teacherSchema.findOne({ uniqueId: request.params.id }),
        admins_1.adminSchema.findOne({ uniqueId: request.params.id }),
    ]);
    const user = new Set(isUser);
    user.delete(null);
    if (user.size > 0) {
        return response.send(user.values().next().value);
    }
    else {
        return response.send({ message: "User not found" });
    }
};
exports.getUser = getUser;
