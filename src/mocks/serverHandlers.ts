import { rest } from 'msw';
import { hopperBCAX5State } from '../testData/FixtureRollingStock';

export const handlers = [
  rest.get('https://switchlister-api.herokuapp.com/rollingstock', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([hopperBCAX5State]));
  }),
];
