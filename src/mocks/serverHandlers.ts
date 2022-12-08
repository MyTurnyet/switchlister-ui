import { DefaultBodyType, rest, RestContext } from 'msw';
import { boxcarCP1234State, hopperBCAX5State } from '../test-configuration/FixtureRollingStock';
import { v, c } from 'msw/lib/SetupApi-b2f0e5ac';
import { RollingStockState } from '../models/RollingStock';
import { TrainState } from '../models/Train';
import { train1State, train2State } from '../data/TrainsContext';

const basePath = 'https://switchlister-api.herokuapp.com/';

const rollingStockToReturn: RollingStockState[] = [hopperBCAX5State, boxcarCP1234State];
const trainsToReturn: TrainState[] = [train1State, train2State];
function get200Result<T extends DefaultBodyType>(res: v<c>, ctx: RestContext, returnedData: T) {
  return res(ctx.status(200), ctx.json(returnedData));
}

export const createApiCall = <T extends DefaultBodyType>(path: string, returnData: T) => {
  return rest.get(basePath + path, async (req, res, ctx) => get200Result<T>(res, ctx, returnData));
};

const defaultGetTrains = createApiCall<TrainState[]>('trains', trainsToReturn);

const defaultGetRollingStock = createApiCall<RollingStockState[]>(
  'rollingStock',
  rollingStockToReturn,
);

export const handlers = [defaultGetRollingStock, defaultGetTrains];
