import { Request, Response } from "express";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";
import { teacherSchema } from "@models/teachers";
import { generatePassword, generateUniqueId } from "@functions/stringGenerator";
import { hashing } from "@functions/hashing";

export const addTeacher = async (request: Request, response: Response) => {
  const {
    name,
    motherName,
    fatherName,
    dateOfBirth,
    qualification,
    age,
    SubjectProfile,
    mobileNumber,
  } = request.body;
  const uniqueId = generateUniqueId(name, mobileNumber).toLowerCase();
  const password = generatePassword(name, mobileNumber).toLowerCase();
  await connectToDatabase();
  const teacher = await teacherSchema.findOne({ name });
  if (teacher) {
    response.status(400).json("Teacher Already Exists");
    await disconnectFromDatabase();
  } else {
    const hashPassword = await hashing(password);
    const newTeacher = await teacherSchema.create({
      name,
      motherName,
      fatherName,
      dateOfBirth,
      qualification,
      age,
      SubjectProfile,
      mobileNumber,
      uniqueId,
      hashPassword,
    });
    if (!newTeacher) {
      response.status(400).json("Teacher Already Exists");
      await disconnectFromDatabase();
    } else {
      response.status(200).json({ uniqueId, password });
      await disconnectFromDatabase();
    }
  }
};
