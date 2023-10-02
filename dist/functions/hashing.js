"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashing = void 0;
const bcryptjs_1 = require("bcryptjs");
const hashing = async (password) => {
    const salt = await (0, bcryptjs_1.genSalt)(10);
    return (0, bcryptjs_1.hashSync)(password, salt);
};
exports.hashing = hashing;
