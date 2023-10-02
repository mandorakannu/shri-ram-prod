"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = process.env.SECRET_KEY;
const tokenGenerator = (id, name) => {
    if (!key)
        throw new Error("No secret key found");
    return jsonwebtoken_1.default.sign({ id, name }, key, {
        expiresIn: "10d",
    });
};
exports.tokenGenerator = tokenGenerator;
