import { connect, disconnect } from "mongoose";

const URI = process.env.DATABASE;
export const connectToDatabase = async () => {
  try {
    if (URI === undefined || URI === null || URI === "") {
      throw new Error(
        "Mongo URI Not Found! Please Provide Mongo URI In .env File."
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
