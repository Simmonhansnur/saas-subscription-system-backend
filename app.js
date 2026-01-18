import express from 'express';
import authRoutes from './routes/authroutes.js';
import plansRoutes from './routes/plansroutes.js';
import subscriptionRoutes from './routes/subscriptionsroutes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SaaS Subscription Backend is running 🚀');
});

// Routes
app.use('/auth', authRoutes);
app.use('/plans', plansRoutes);
app.use('/subscriptions', subscriptionRoutes);

export default app;
