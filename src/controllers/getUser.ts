import { Request, Response } from "express";
import { connectToDatabase } from "@databases/connection";
import { studentSchema } from "@models/students";

export const getUser = async (request: Request, response: Response) => {
  await connectToDatabase();
  const user = await studentSchema.findOne({ uniqueId: request.params.id });
  // remove password and _id from user object
  if (user !== null) {
    const updatedUser = {
      ...user.toObject(),
      password: undefined,
      _id: undefined,
    };
    console.log(updatedUser);
    response.send(updatedUser);
  } else {
    response.send({ message: "User not found" });
  }
};
