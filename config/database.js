import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//db conn
export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("db connected");
  });
};
