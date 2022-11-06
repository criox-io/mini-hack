import mongoose from "mongoose";
import { MODEL } from "../../constants/index.js";

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export default mongoose.model(MODEL.USER, schema);
