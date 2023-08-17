import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { studentSchema } from "@models/students";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const authStudent = async (request: Request, response: Response) => {
  const { name, password, uniqueId } = request.body;
  await connectToDatabase();
  const isStudent = await studentSchema.findOne({ uniqueId });
  await disconnectFromDatabase();
  if (!isStudent) {
    return response.status(400).json({
      message: "Student not found",
    });
  }
  const isMatch = await bcryptjs.compare(
    password,
    isStudent.password as string
  );
  if (!isMatch) {
    return response.status(400).json({
      message: "Invalid credentials",
    });
  }
  return response.status(200).json({
    message: "Student logged in successfully",
    data: isStudent,
  });
};
