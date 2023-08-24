import { Request, Response } from "express";
import { studentDetailsUpdateSchema } from "@models/studentDetailsUpdate";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";
export const studentDetailsUpdate = async (
  request: Request,
  response: Response
) => {
  const {
    name,
    motherName,
    fatherName,
    age,
    dateOfBirth,
    uniqueId,
    oldName,
    oldMotherName,
    oldFatherName,
    oldAge,
    oldDateOfBirth,
  } = request.body;
  await connectToDatabase();
  const user = await studentDetailsUpdateSchema.create({
    newMotherName: motherName,
    newFatherName: fatherName,
    newAge: age,
    newDateOfBirth: dateOfBirth,
    uniqueId,
    newName: name,
    name: oldName === undefined ? "" : oldName,
    motherName: oldMotherName === undefined ? "" : oldMotherName,
    fatherName: oldFatherName === undefined ? "" : oldFatherName,
    age: oldAge === undefined ? "" : oldAge,
    dateOfBirth: oldDateOfBirth === undefined ? "" : oldDateOfBirth,
  });
  if (user) {
    response.status(200).json("Student Details Updated Successfully");
    await disconnectFromDatabase();
  } else {
    response.status(400).json("Student Details Not Updated");
    await disconnectFromDatabase();
  }
};
