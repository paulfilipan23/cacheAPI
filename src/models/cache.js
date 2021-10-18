import { Schema, model } from "mongoose";

const cacheSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    min: 6,
  },
  data: {
    type: String,
    max: 255,
    min: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

export default model("Cache", cacheSchema);
