import { CarType, RollingStock, RollingStockState } from '../models/RollingStock';

export const hopperBCAX5State: RollingStockState = {
  carType: CarType.HT,
  color: 'WHT',
  roadName: 'BCAX',
  roadNumber: 5,
  length: 52,
  loaded: false,
};
export const boxcarCP1234State: RollingStockState = {
  carType: CarType.XM,
  color: 'RED',
  roadName: 'CPR',
  roadNumber: 1234,
  length: 52,
  loaded: false,
};
export const boxcarBN9876State: RollingStockState = {
  carType: CarType.XM,
  color: 'GREEN',
  roadName: 'BN',
  roadNumber: 9876,
  length: 52,
  loaded: false,
};

export const boxcarBN9876 = new RollingStock(boxcarBN9876State);
export const boxcarCP1234 = new RollingStock(boxcarCP1234State);
export const hopperBCAX5 = new RollingStock(hopperBCAX5State);
