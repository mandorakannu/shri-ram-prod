import { Request, Response } from "express";
import { teacherSchema } from "@models/teachers";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const removeTeacher = async (request: Request, response: Response) => {
  const uniqueId = request.params.id;
  await connectToDatabase();
  const teacher = await teacherSchema.findOne({ uniqueId });
  if (teacher) {
    await teacherSchema.deleteOne({ uniqueId });
    response.json("Teacher Removed").status(200);
    await disconnectFromDatabase();
  } else {
    response.json("Teacher Not Found").status(400);
    await disconnectFromDatabase();
  }
};

export const getTeacherRecords = async (
  request: Request,
  response: Response
) => {
  //
  const teacher = request.params.id;
  const uniqueId = teacher.split("-")[0];
  await connectToDatabase();
  const teacherRecords = await teacherSchema.findOne({ uniqueId });
  response
    .json({
      name: teacherRecords?.name,
      mobileNumber: teacherRecords?.mobileNumber,
      SubjectProfile: teacherRecords?.SubjectProfile,
    })
    .status(200);
};
