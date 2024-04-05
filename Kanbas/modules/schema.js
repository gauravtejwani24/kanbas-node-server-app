import mongoose from "mongoose";
const lesson = new mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    value: String,
  },
  { _id: false }
);

const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    course: String,
    id: String,
    lessons: [lesson],
  },
  { collection: "modules" }
);
export default moduleSchema;
