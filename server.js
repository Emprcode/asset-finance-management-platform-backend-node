import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./src/config/DbConfig.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database

connectDb();

app.use("/", (req, res, next) => {
  res.json({
    message: "You do not have access here",
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`your server is running at http://localhost:${PORT}`);
});
