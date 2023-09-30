import { Schema, model } from "mongoose";

const admin = new Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  dateOfBirth: String,
  age: Number,
  password: String,
  uniqueId: String,
  mobileNumber: Number,
  role: String,
});

export const adminSchema = model("Admin", admin);
