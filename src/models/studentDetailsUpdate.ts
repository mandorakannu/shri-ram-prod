import { Schema, model } from "mongoose";

const studentDetailsUpdate = new Schema({
  id: String,
  name: String,
  motherName: String,
  fatherName: String,
  dateOfBirth: String,
  age: Number,
  password: String,
  uniqueId: String,
  mobileNumber: Number,
  newName: String,
  newMotherName: String,
  newFatherName: String,
  newDateOfBirth: String,
  newAge: Number,
});

export const studentDetailsUpdateSchema = model(
  "studentDetailsUpdate",
  studentDetailsUpdate
);
