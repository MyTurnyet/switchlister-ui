import { CarType, RollingStock, RollingStockState } from '../models/RollingStock';

export const hopperBCAX5State: RollingStockState = {
  carType: 'HT',
  carTypeEnum: CarType.HT,
  color: 'WHT',
  roadName: 'BCAX',
  roadNumber: 5,
  length: 52,
  loaded: false,
};
export const boxcarCP1234State: RollingStockState = {
  carType: 'XM',
  carTypeEnum: CarType.XM,
  color: 'RED',
  roadName: 'CPR',
  roadNumber: 1234,
  length: 52,
  loaded: false,
};

export const boxcarCP1234 = new RollingStock(boxcarCP1234State);
export const hopperBCAX5 = new RollingStock(hopperBCAX5State);
