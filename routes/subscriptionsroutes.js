import express from 'express';
import {
  subscribe,
  cancelSubscription,
  renewSubscription,
  getMySubscriptions,
} from '../controllers/subscriptionsController.js';
import { protect } from '../middlewares/authmiddleware.js';

const router = express.Router();

router.use(protect); // all below routes require login

router.post('/', subscribe); // subscribe to a plan
router.get('/', getMySubscriptions); // view my subscriptions
router.put('/:subscriptionId/cancel', cancelSubscription); // cancel
router.put('/:subscriptionId/renew', renewSubscription); // renew

export default router;
