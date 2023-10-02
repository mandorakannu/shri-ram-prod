"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: ".env", override: true });
const URI = process.env.DATABASE;
const connectToDatabase = async () => {
    try {
        if (URI === undefined || URI === null || URI === "") {
            throw new Error("Mongo URI Not Found! Please Provide Mongo URI In .env File Or dotenv.config({path: '.env.local', override: true}). Path is set as .env.local by default.");
        }
        await (0, mongoose_1.connect)(URI);
        console.log("Database connected");
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectToDatabase = connectToDatabase;
const disconnectFromDatabase = async () => {
    try {
        await (0, mongoose_1.disconnect)();
        console.log("Database disconnected");
    }
    catch (error) {
        console.log(error);
    }
};
exports.disconnectFromDatabase = disconnectFromDatabase;
