import { rest } from 'msw';
import { boxcarCP1234State, hopperBCAX5State } from '../test-configuration/FixtureRollingStock';

const basePath = 'https://switchlister-api.herokuapp.com/';
export const handlers = [
  rest.get(basePath + 'rollingstock', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([hopperBCAX5State, boxcarCP1234State]));
  }),
];
