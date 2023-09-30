import { model, Schema } from "mongoose";

const student = new Schema({
  name: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  dateOfBirth: String,
  age: Number,
  className: String,
  password: String,
  uniqueId: String,
  mobileNumber: Number,
  role: String,
  subjects: {
    english: Number,
    hindi: Number,
    maths: Number,
    science: Number,
    computer: Number,
  },
});

export const studentSchema = model("students", student);
