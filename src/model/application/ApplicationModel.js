import ApplicationSchema from "./ApplicationSchema.js";

export const createApplication = (userObj) => {
  return ApplicationSchema(userObj).save();
};

export const getApplicationsByUserId = (userId) => {
  return ApplicationSchema.find(userId);
};

export const getSingleApplication = (applicationId) => {
  return ApplicationSchema.findById(applicationId);
};

export const updateApplication = (_id, updateObj) => {
  return ApplicationSchema.findByIdAndUpdate(_id, updateObj, { new: true });
};

export const deleteUsersApplication = (_id, userId) => {
  return ApplicationSchema.findOneAndDelete(_id, userId);
};
