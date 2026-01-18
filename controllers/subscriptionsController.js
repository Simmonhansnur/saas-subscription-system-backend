import Subscription from '../models/subscription.js';
import Plan from '../models/plan.js';

// User subscribes to a plan
export const subscribe = async (req, res) => {
  const { planId } = req.body;
  const userId = req.user._id;

  const plan = await Plan.findById(planId);
  if (!plan) return res.status(404).json({ message: 'Plan not found' });

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + plan.durationInDays);

  const subscription = await Subscription.create({
    user: userId,
    plan: plan._id,
    startDate,
    endDate,
    status: 'active',
  });

  res.status(201).json(subscription);
};

// User cancels subscription
export const cancelSubscription = async (req, res) => {
  const { subscriptionId } = req.params;

  const subscription = await Subscription.findOne({
    _id: subscriptionId,
    user: req.user._id,
  });

  if (!subscription)
    return res.status(404).json({ message: 'Subscription not found' });

  subscription.status = 'cancelled';
  await subscription.save();

  res.json({ message: 'Subscription cancelled', subscription });
};

// User renews subscription
export const renewSubscription = async (req, res) => {
  const { subscriptionId } = req.params;

  const subscription = await Subscription.findOne({
    _id: subscriptionId,
    user: req.user._id,
  }).populate('plan');

  if (!subscription)
    return res.status(404).json({ message: 'Subscription not found' });

  if (subscription.status === 'active') {
    return res.status(400).json({ message: 'Subscription is already active' });
  }

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + subscription.plan.durationInDays);

  subscription.startDate = startDate;
  subscription.endDate = endDate;
  subscription.status = 'active';
  await subscription.save();

  res.json({ message: 'Subscription renewed', subscription });
};

// User views their subscriptions
export const getMySubscriptions = async (req, res) => {
  const subscriptions = await Subscription.find({ user: req.user._id }).populate('plan');
  res.json(subscriptions);
};
