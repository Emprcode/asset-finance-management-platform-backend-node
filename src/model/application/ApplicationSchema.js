import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  value: { type: Number, required: true },
});

const ApplicationSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "active",
    },
    legalName: { type: String, required: true },
    address: { type: String, required: true },

    phoneNumber: { type: String, required: true },
    assets: [itemSchema],
    income: [itemSchema],
    expenses: [itemSchema],
    liabilities: [itemSchema],
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      requred: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", ApplicationSchema);
