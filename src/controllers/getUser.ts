import { Request, Response } from "express";
import { connectToDatabase } from "@databases/connection";
import { studentSchema } from "@models/students";

export const getUser = async (request: Request, response: Response) => {
  await connectToDatabase();
  const user = await studentSchema.findOne({ uniqueId: request.params.id });
  response.send(user);
};
