import { RollingStockState } from '../../models/RollingStock';
import { boxcarCP1234State, hopperBCAX5State } from '../../test-configuration/FixtureRollingStock';
import { ApiHandler } from './ApiHandler';

const rollingStockToReturn: RollingStockState[] = [hopperBCAX5State, boxcarCP1234State];
export const defaultGetRollingStock = ApiHandler.createApiCall<RollingStockState[]>(
  'rollingStock',
  rollingStockToReturn,
);
