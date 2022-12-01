import { rest } from 'msw';
import { boxcarCP1234State, hopperBCAX5State } from '../test-configuration/FixtureRollingStock';

export const handlers = [
  rest.get('https://switchlister-api.herokuapp.com/rollingstock', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([hopperBCAX5State, boxcarCP1234State]));
  }),
];
