import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./src/config/DbConfig.js";
import UserRouter from "./src/router/UserRouter.js";
import ApplicationRouter from "./src/router/ApplicationRouter.js";

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database
connectDb();

//router
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/application", ApplicationRouter);

app.use("/", (req, res, next) => {
  res.json({
    message: "You do not have access here",
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`your server is running at http://localhost:${PORT}`);
});
