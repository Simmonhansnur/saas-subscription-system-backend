import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    durationInDays: { type: Number, required: true }, // e.g., 30, 90, etc.
  },
  { timestamps: true }
);

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
