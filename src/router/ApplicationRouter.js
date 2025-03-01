import express from "express";
import {
  createApplication,
  deleteUsersApplication,
  getApplicationsByUserId,
  getSingleApplication,
  updateApplication,
} from "../model/application/ApplicationModel.js";

const router = express.Router();
//CRUD

//post application
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await createApplication({
      ...req.body,
      userId: authorization,
    });
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New Application added successfully!",
        })
      : res.json({
          status: "error",
          message: "Unable to add new application, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//get applications
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const result = await getApplicationsByUserId({ userId: authorization });
    console.log(result);
    res.json({
      status: "success",
      message: "Applications fetched successfully!",
      result,
    });
  } catch (error) {
    next(error);
  }
});

// update application
router.put("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id, ...updateObj } = req.body;

    const application = await getSingleApplication(_id);

    if (application?.userId?.toString() !== authorization) {
      return res.status(403).json({
        status: "error",
        message: "unauthorized!",
      });
    }

    const result = await updateApplication(_id, updateObj);
    console.log(result);
    result._id
      ? res.json({
          status: "success",
          message: "Application updated Successfully!",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});

// delete application

router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;
    const result = await deleteUsersApplication({ _id, userId: authorization });
    result._id
      ? res.json({
          status: "success",
          message: "Application deleted successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
