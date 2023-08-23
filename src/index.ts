import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { resolve } from "path";
import * as dotenv from "dotenv";
dotenv.config();
import {
  authStudentRoute,
  authTeacherRoute,
  authAdminRoute,
} from "@routes/login";

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(authStudentRoute);
app.use(authTeacherRoute);
app.use(authAdminRoute);

app.get("*", (request: Request, res: Response) => {
  res.sendFile(resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
