import { Request, Response } from "express";
import { Complain } from "@models/complain";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@databases/connection";

export const registerComplains = async (
  request: Request,
  response: Response
) => {
  const { name, className, message } = request.body;
  await connectToDatabase();
  const complains = await Complain.create({
    name,
    className,
    message,
  });
  if (!complains)
    return response.status(400).json({ message: "Complain not Registered!" });
  else {
    response.send(complains).status(201);
    await disconnectFromDatabase();
  }
};

export const getComplains = async (request: Request, response: Response) => {
  await connectToDatabase();
  const complains = await Complain.find({});
  if (!complains)
    return response.status(400).json({ message: "Complains not found!" });
  else {
    response.send(complains).status(200);
    await disconnectFromDatabase();
  }
};
