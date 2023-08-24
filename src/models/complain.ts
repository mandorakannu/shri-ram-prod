import { Schema, model } from "mongoose";

const ComplainSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Complain = model("Complain", ComplainSchema);
