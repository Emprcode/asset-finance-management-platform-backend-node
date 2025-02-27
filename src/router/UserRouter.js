import express from "express";
import { createUser, getSingleUser } from "../model/user/UserModel.js";

const router = express.Router();

//register user
router.post("/", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User created Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create user, Please try again later",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.errorcode = 200;
      error.message =
        " This email has been used already, Please use different email or reset your password";
    }
    next(error);
  }
});

//login user
router.post("/login", async (req, res, next) => {
  try {
    const result = await getSingleUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User Logged in successfully!",
          result: {
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
          },
        })
      : res.json({
          status: "error",
          message: "Unable to login, Please try again later!",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
