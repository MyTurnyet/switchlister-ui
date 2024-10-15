import { CarType, RollingStock, RollingStockState } from '../models/RollingStock';
import { v4 as uuidv4 } from 'uuid';

export const hopperBCAX5State: RollingStockState = {
  carType: CarType.HT,
  color: 'WHT',
  id: {
    uuid: uuidv4(),
    roadName: 'BCAX',
    roadNumber: 5,
  },
  length: 52,
  loaded: false,
  roadName: 'BCAX',
  roadNumber: 5,
};
export const boxcarCP1234State: RollingStockState = {
  carType: CarType.XM,
  color: 'RED',
  id: {
    uuid: uuidv4(),
    roadName: 'CPR',
    roadNumber: 1234,
  },
  length: 52,
  loaded: false,
  roadName: 'CPR',
  roadNumber: 1234,
};
export const boxcarBN9876State: RollingStockState = {
  carType: CarType.XM,
  color: 'GREEN',
  id: {
    uuid: uuidv4(),
    roadName: 'BN',
    roadNumber: 9876,
  },
  length: 52,
  loaded: false,
  roadName: 'BN',
  roadNumber: 9876,
};
export const overheightCP2468State: RollingStockState = {
  carType: CarType.XMO,
  color: 'RED',
  id: {
    uuid: uuidv4(),
    roadName: 'CP',
    roadNumber: 2468,
  },
  length: 52,
  loaded: false,
  roadName: 'CP',
  roadNumber: 2468,
};

export const boxcarBN9876 = new RollingStock(boxcarBN9876State);
export const boxcarCP1234 = new RollingStock(boxcarCP1234State);
export const hopperBCAX5 = new RollingStock(hopperBCAX5State);
export const overheightCP2468 = new RollingStock(overheightCP2468State);
