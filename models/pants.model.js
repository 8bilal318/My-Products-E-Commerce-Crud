import mongoose from "mongoose";

const pantsSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Pants", pantsSchema);
