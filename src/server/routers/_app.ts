import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const appRouter = router({
  getData: publicProcedure
    .input(z.object({ limit: z.number().optional() }))
    .query(async ({ input, ctx }) => {
      const limit = input.limit || 10;
      // Simulate fetching data
      return Array.from({ length: limit }).map((_, i) => ({
        id: i,
        value: Math.random() * 100,
        time: new Date(),
      }));
    }),
});

export type AppRouter = typeof appRouter;