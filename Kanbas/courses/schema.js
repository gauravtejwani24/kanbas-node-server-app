import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
  },
  { collection: "courses" }
);

export default coursesSchema;