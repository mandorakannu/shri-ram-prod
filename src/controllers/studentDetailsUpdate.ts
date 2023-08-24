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
    oldStudentName,
    oldFatherName,
    oldMotherName,
    oldAge,
    oldDateOfBirth,
    newStudentName,
    newMotherName,
    newFatherName,
    newAge,
    newDateOfBirth,
  } = request.body;
  await connectToDatabase();
  const user = await studentDetailsUpdateSchema.create({
    name: oldStudentName,
    fatherName: oldFatherName,
    motherName: oldMotherName,
    age: oldAge,
    dateOfBirth: oldDateOfBirth,
    newName: newStudentName,
    newFatherName: newFatherName,
    newMotherName: newMotherName,
    newAge: newAge,
    newDateOfBirth: newDateOfBirth,
  });
  if (user) {
    response.send("Student Details Updated Successfully").sendStatus(200);
    await disconnectFromDatabase();
  } else {
    response.send("Student Details Not Updated").sendStatus(400);
    await disconnectFromDatabase();
  }
};
