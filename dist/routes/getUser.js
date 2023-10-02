"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRoute = void 0;
const getUser_1 = require("../controllers/getUser");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.getUserRoute = router.get("/getUser/:id", getUser_1.getUser);
