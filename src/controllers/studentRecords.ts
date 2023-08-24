import { Request, Response } from "express";
import { studentSchema } from "@models/students";
import { studentDetailsUpdateSchema } from "@models/studentDetailsUpdate";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const getStudentRecords = async (
  request: Request,
  response: Response
) => {
  await connectToDatabase();
  const studentRecords = await studentDetailsUpdateSchema.find({});
  response.json(studentRecords).status(200);
};

export const updateStudentRecords = async (
  request: Request,
  response: Response
) => {
  const {
    uniqueId,
    name,
    fatherName,
    mobileNumber,
    motherName,
    dateOfBirth,
    age,
  } = request.body;
  await connectToDatabase();

  const changeUser = await studentDetailsUpdateSchema.findOne({ uniqueId });
  if (changeUser) {
    const user = await studentSchema.updateOne(
      { uniqueId },
      {
        $set: {
          name,
          fatherName,
          mobileNumber,
          motherName,
          dateOfBirth,
          age,
        },
      }
    );
    if (user) {
      response.json("Student Record Updated").status(200);
      await studentDetailsUpdateSchema.deleteOne({ uniqueId });
      await disconnectFromDatabase();
    } else {
      response.json("Student Record Not Updated").status(400);
      await disconnectFromDatabase();
    }
  }
};
