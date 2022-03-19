import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { verifyToken } from '../utils/tokenHelper';
import { IClub } from '../utils/interfaces';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests GET /clubs route', () => {
  it('Return status 200 with an array containing all clubs', async () => {
    return chai
      .request(app)
      .get('/clubs')
      .then((res: Response) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        res.body.forEach((club: IClub) => {
          expect(club).to.have.property('id');
          expect(club).to.have.property('clubName');
        })
      });
  })
});