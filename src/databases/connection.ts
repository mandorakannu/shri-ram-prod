import { connect, disconnect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env", override: true });

const URI = process.env.DATABASE;
export const connectToDatabase = async () => {
  try {
    if (URI === undefined || URI === null || URI === "") {
      throw new Error(
        "Mongo URI Not Found! Please Provide Mongo URI In .env File Or dotenv.config({path: '.env.local', override: true}). Path is set as .env.local by default."
      );
    }
    await connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.log(error);
  }
};
