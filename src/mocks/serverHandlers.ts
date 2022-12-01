import { rest, RestContext } from 'msw';
import { boxcarCP1234State, hopperBCAX5State } from '../test-configuration/FixtureRollingStock';
import { RollingStockState } from '../models/RollingStock';
import { v, c } from 'msw/lib/SetupApi-b2f0e5ac';

const basePath = 'https://switchlister-api.herokuapp.com/';

const rollingStockToReturn = [hopperBCAX5State, boxcarCP1234State];

function get200Result(res: v<c>, ctx: RestContext, returnedData: any) {
  return res(ctx.status(200), ctx.json(returnedData));
}

const getRollingStockWith2Cars = rest.get(basePath + 'rollingstock', async (req, res, ctx) =>
  get200Result(res, ctx, rollingStockToReturn),
);
export const getEmptyRollingStock = rest.get(basePath + 'rollingstock', async (req, res, ctx) =>
  get200Result(res, ctx, []),
);

export const handlers = [getRollingStockWith2Cars];
