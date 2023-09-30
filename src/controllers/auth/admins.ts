import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { adminSchema } from "@models/admins";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const authAdmins = async (request: Request, response: Response) => {
  const { name, password, uniqueId } = request.body;
  await connectToDatabase();
  const isAdmin = await adminSchema.findOne({ uniqueId });
  await disconnectFromDatabase();
  if (!isAdmin) {
    return response.status(400).json({
      message: "Admin not found",
    });
  }
  const isMatch = await bcryptjs.compare(password, isAdmin.password as string);
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
