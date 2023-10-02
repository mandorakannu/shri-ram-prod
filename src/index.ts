import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { resolve } from "path";
import * as dotenv from "dotenv";
import { allRoutes } from "@routes/allRoutes";
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
allRoutes.forEach((route) => {
  app.use(route);
});

app.get("/", (request: Request, res: Response) => {
  res.send("Shri Ram College Backend is Working |  Created by Kannu Mandora");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
