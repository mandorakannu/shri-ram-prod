import { connectToDatabase } from "@databases/connection";
import { studentSchema } from "@models/students";
import { Request, Response } from "express";
import { numbers } from "@functions/numbers";
import { generatePassword, generateUniqueId } from "@functions/stringGenerator";
import { hashing } from "@functions/hashing";

export const addStudent = async (req: Request, res: Response) => {
  const {
    name,
    motherName,
    fatherName,
    dateOfBirth,
    age,
    mobileNumber,
    className,
  } = req.body;
  const password = generatePassword(name, mobileNumber).toLowerCase();
  const uniqueId = generateUniqueId(name, mobileNumber).toLowerCase();
  const hashPassword = await hashing(password);
  await connectToDatabase();
  const addUser = await studentSchema.create({
    name,
    motherName,
    fatherName,
    dateOfBirth,
    age,
    mobileNumber,
    className,
    subjects: {
      english: numbers(),
      maths: numbers(),
      science: numbers(),
      computer: numbers(),
      hindi: numbers(),
    },
    password: hashPassword,
    uniqueId,
  });
  if (addUser) {
    res.json({ password, uniqueId });
    res.statusCode = 201;
  }
};
