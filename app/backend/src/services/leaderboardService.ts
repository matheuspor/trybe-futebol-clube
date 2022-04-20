import {
  calculateLeaderboardAll,
  calculateLeaderboardAway,
  calculateLeaderboardHome,
} from '../utils/helperFunctions';
import matchsService from './matchsService';

const leaderboardServices = {
  getAll: async () => {
    const matchs = await matchsService.getAllInProgress(false);
    const leaderboard = calculateLeaderboardAll(matchs);
    return leaderboard;
  },
  getAllHome: async () => {
    const matchs = await matchsService.getAllInProgress(false);
    const leaderboard = calculateLeaderboardHome(matchs);
    return leaderboard;
  },
  getAllAway: async () => {
    const matchs = await matchsService.getAllInProgress(false);
    const leaderboard = calculateLeaderboardAway(matchs);
    return leaderboard;
  },
};

export default leaderboardServices;
