import express from 'express';
import {
  createPlan,
  updatePlan,
  deletePlan,
  getPlans,
} from '../controllers/plansController.js';
import { protect, adminOnly } from '../middlewares/authmiddleware.js';

const router = express.Router();

// User — view plans
router.get('/', getPlans);

// Admin — manage plans
router.post('/', protect, adminOnly, createPlan);
router.put('/:planId', protect, adminOnly, updatePlan);
router.delete('/:planId', protect, adminOnly, deletePlan);

export default router;
