import Plan from '../models/plan.js';

// Admin — Create Plan
export const createPlan = async (req, res) => {
  const { name, description, price, durationInDays } = req.body;

  const plan = await Plan.create({ name, description, price, durationInDays });
  res.status(201).json(plan);
};

// Admin — Update Plan
export const updatePlan = async (req, res) => {
  const { planId } = req.params;
  const updates = req.body;

  const plan = await Plan.findByIdAndUpdate(planId, updates, { new: true });
  if (!plan) {
    return res.status(404).json({ message: 'Plan not found' });
  }

  res.json(plan);
};

// Admin — Delete Plan
export const deletePlan = async (req, res) => {
  const { planId } = req.params;

  const plan = await Plan.findByIdAndDelete(planId);
  if (!plan) {
    return res.status(404).json({ message: 'Plan not found' });
  }

  res.json({ message: 'Plan deleted' });
};

// Anyone — View Plans
export const getPlans = async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
};