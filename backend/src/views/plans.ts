import { Router, Request, Response } from 'express';

export const plansRouter = Router();

const plans = [
  { id: 'starter', name: 'Starter', priceMonthly: 19, features: ['Daily market brief', '2 strategies'] },
  { id: 'pro', name: 'Pro', priceMonthly: 49, features: ['All strategies', 'Real-time alerts', 'Priority support'] },
  { id: 'elite', name: 'Elite', priceMonthly: 99, features: ['Institutional signals', 'Custom watchlists', '1:1 onboarding'] }
];

plansRouter.get('/', (_req: Request, res: Response) => {
  res.json({ plans });
});

