import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { requireAuth } from '../web/requireAuth.js';

export const signalsRouter = Router();

type Signal = {
  id: string;
  symbol: string;
  direction: 'long' | 'short';
  entry: number;
  stop: number;
  targets: number[];
  createdAt: string;
};

const inMemorySignals: Signal[] = [
  {
    id: 'sig_1',
    symbol: 'BTCUSDT',
    direction: 'long',
    entry: 67123,
    stop: 66300,
    targets: [67500, 68100, 69000],
    createdAt: new Date().toISOString()
  }
];

signalsRouter.get('/', requireAuth, (_req: Request, res: Response) => {
  res.json({ signals: inMemorySignals });
});

const createSchema = z.object({
  symbol: z.string().min(1),
  direction: z.enum(['long', 'short']),
  entry: z.number().positive(),
  stop: z.number().positive(),
  targets: z.array(z.number().positive()).min(1)
});

signalsRouter.post('/', requireAuth, (req: Request, res: Response) => {
  const parse = createSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload' });
  const data = parse.data;
  const sig: Signal = {
    id: `sig_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...data
  };
  inMemorySignals.unshift(sig);
  res.status(201).json({ signal: sig });
});

