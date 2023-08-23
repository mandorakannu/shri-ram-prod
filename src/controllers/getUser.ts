import { Request, Response } from "express";
import { connectToDatabase } from "@databases/connection";
import { studentSchema } from "@models/students";
import { teacherSchema } from "@models/teachers";
import { adminSchema } from "@models/admins";

export const getUser = async (request: Request, response: Response) => {
  await connectToDatabase();
  const isUser = await Promise.all([
    studentSchema.findOne({ uniqueId: request.params.id }),
    teacherSchema.findOne({ uniqueId: request.params.id }),
    adminSchema.findOne({ uniqueId: request.params.id }),
  ]);
  const user = new Set(isUser);
  user.delete(null);
  if (user.size > 0) {
    return response.send(user.values().next().value);
  } else {
    return response.send({ message: "User not found" });
  }
};
