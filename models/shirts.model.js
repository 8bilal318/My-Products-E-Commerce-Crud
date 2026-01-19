import mongoose from "mongoose";

const shirtsSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Shirts", shirtsSchema);
