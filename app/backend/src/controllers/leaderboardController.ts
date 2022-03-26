import * as express from 'express';
import leaderboardServices from '../services/leaderboardService';

const leaderboardController = {
  getAllHome: async (_req: express.Request, res: express.Response) => {
    const leaderboard = await leaderboardServices.getAllHome();

    res.status(200).json(leaderboard);
  },
  getAllAway: async (_req: express.Request, res: express.Response) => {
    const leaderboard = await leaderboardServices.getAllAway();

    res.status(200).json(leaderboard);
  },
  getAll: async (_req: express.Request, res: express.Response) => {
    const leaderboard = await leaderboardServices.getAll();

    res.status(200).json(leaderboard);
  },
};

export default leaderboardController;
