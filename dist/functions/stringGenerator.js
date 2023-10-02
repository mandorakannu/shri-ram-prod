"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = exports.generatePassword = void 0;
const generatePassword = (name, number) => `${name}${number}`.slice(0, 8);
exports.generatePassword = generatePassword;
const generateUniqueId = (name, number) => `${name}${number}`.slice(0, 8) + Math.floor(Math.random() * 1000);
exports.generateUniqueId = generateUniqueId;
