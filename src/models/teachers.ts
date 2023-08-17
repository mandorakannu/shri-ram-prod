import { Schema, model } from "mongoose";

const teacher = new Schema({
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
  qualification: String,
  dateOfBirth: String,
  age: Number,
  SubjectProfile: String,
  password: String,
  uniqueId: String,
  mobileNumber: Number,
});

export const teacherSchema = model("teachers", teacher);
