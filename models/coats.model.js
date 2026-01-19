import mongoose from "mongoose";

const coatsSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Coats", coatsSchema);
