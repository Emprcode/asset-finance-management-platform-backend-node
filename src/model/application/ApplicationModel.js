import ApplicationSchema from "./ApplicationSchema.js";

export const createApplication = (userObj) => {
  return ApplicationSchema(userObj).save();
};

export const getApplicationsById = (userId) => {
  return ApplicationSchema.find(userId);
};

export const updateApplication = (_id, obj) => {
  return ApplicationSchema.findByIdAndUpdate(_id, obj, { new: true });
};

export const deleteApplication = (_id) => {
  return ApplicationSchema.findByIdAndDelete(_id);
};
