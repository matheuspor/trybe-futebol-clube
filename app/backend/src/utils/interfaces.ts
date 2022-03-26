export interface IUserLogin {
  email: string;
  password: string;
}

export interface IErrorStatus {
  [key: string]: number;
}

export interface IJwtPayload {
  role: string;
  iat?: number;
}

export interface IClub {
  id: number;
  name: string;
}

export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  homeClub: {
    clubName: string;
  }
  awayClub: {
    clubName: string;
  }
}

export interface ICreateMatch {
  homeTeam: string;
  homeTeamGoals: number;
  awayTeam: string;
  awayTeamGoals: number;
}

export interface ILeaderboardTeam {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number | string,
}

export interface IMatchStats {
  clubName: string,
  clubGoals: number,
  adversaryGoals: number,
  leaderboard: ILeaderboardTeam[],
}
