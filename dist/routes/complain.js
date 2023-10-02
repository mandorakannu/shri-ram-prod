"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComplainsRoute = exports.registerComplainsRoute = void 0;
const express_1 = require("express");
const complain_1 = require("../controllers/complain");
const router = (0, express_1.Router)();
exports.registerComplainsRoute = router.post("/complain", complain_1.registerComplains);
exports.getComplainsRoute = router.get("/api/getComplains", complain_1.getComplains);
