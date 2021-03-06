import { ICreateMatch } from '../utils/interfaces';
import Club from '../database/models/Club';
import Match from '../database/models/Match';
import clubsService from './clubsService';

const matchsService = {
  getAllInProgress: async (inProgress: boolean) => Match.findAll({
    where: { inProgress },
    include: [{
      model: Club,
      as: 'homeClub',
      attributes: { exclude: ['id'] },
    },
    {
      model: Club,
      as: 'awayClub',
      attributes: { exclude: ['id'] },
    }],
  })
    .then((matchArr) => matchArr.map((match) => match.get({ plain: true }))),

  getAll: async () => {
    const matchs = await Match.findAll({
      include: [{
        model: Club,
        as: 'homeClub',
        attributes: { exclude: ['id'] },
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: { exclude: ['id'] },
      }],
    })
      .then((matchArr) => matchArr.map((match) => match.get({ plain: true })));
    return matchs;
  },
  create: async (match: ICreateMatch) => {
    const { homeTeam, awayTeam } = match;
    const homeClub = await clubsService.getById(homeTeam);
    const awayClub = await clubsService.getById(awayTeam);
    if (!homeClub || !awayClub) {
      const error = new Error('There is no team with such id!');
      throw error;
    }
    const matchCreated = await Match.create({ ...match, inProgress: true });
    return matchCreated;
  },
  finishMatch: async (id: string) => {
    await Match.update({ inProgress: false }, { where: { id } });
  },
  updateMatch: async (id: string, homeTeamGoals: number, awayTeamGoals: number) => {
    await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  },
};

export default matchsService;
