import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = process.env.MONGO_URL;

export const connectDb = () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(mongoUrl);
    conn && console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};
