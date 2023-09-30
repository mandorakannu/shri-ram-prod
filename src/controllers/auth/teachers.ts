import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { teacherSchema } from "@models/teachers";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const authTeacher = async (request: Request, response: Response) => {
  const { name, password, uniqueId } = request.body;
  await connectToDatabase();
  const isTeacher = await teacherSchema.findOne({ uniqueId });
  await disconnectFromDatabase();
  if (!isTeacher) {
    return response.status(400).json({
      message: "Teacher not found",
    });
  }
  const isMatch = await bcryptjs.compare(
    password,
    isTeacher.password as string
  );
  if (!isMatch) {
    return response.status(400).json({
      message: "Invalid credentials",
    });
  }
  return response.status(200).json({
    message: "Teacher logged in successfully",
    name: isTeacher.name,
    uniqueId: isTeacher.uniqueId,
    motherName: isTeacher.motherName,
    fatherName: isTeacher.fatherName,
    dateOfBirth: isTeacher.dateOfBirth,
    age: isTeacher.age,
    mobileNumber: isTeacher.mobileNumber,
    role: isTeacher.role,
    qualification: isTeacher.qualification,
    SubjectProfile: isTeacher.SubjectProfile,
  });
};
