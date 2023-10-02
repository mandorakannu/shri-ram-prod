"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComplains = exports.registerComplains = void 0;
const complain_1 = require("../models/complain");
const connection_1 = require("../databases/connection");
const registerComplains = async (request, response) => {
    const { name, className, message } = request.body;
    await (0, connection_1.connectToDatabase)();
    const complains = await complain_1.Complain.create({
        name,
        className,
        message,
    });
    if (!complains)
        return response.status(400).json({ message: "Complain not Registered!" });
    else {
        response.send(complains).status(201);
        await (0, connection_1.disconnectFromDatabase)();
    }
};
exports.registerComplains = registerComplains;
const getComplains = async (request, response) => {
    await (0, connection_1.connectToDatabase)();
    const complains = await complain_1.Complain.find({});
    if (!complains)
        return response.status(400).json({ message: "Complains not found!" });
    else {
        response.send(complains).status(200);
        await (0, connection_1.disconnectFromDatabase)();
    }
};
exports.getComplains = getComplains;
