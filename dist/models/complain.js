"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complain = void 0;
const mongoose_1 = require("mongoose");
const ComplainSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
exports.Complain = (0, mongoose_1.model)("Complain", ComplainSchema);
