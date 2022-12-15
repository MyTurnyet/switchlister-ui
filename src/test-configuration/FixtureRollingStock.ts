import { CarType, RollingStock, RollingStockState } from '../models/RollingStock';
import { v4 as uuidv4 } from 'uuid';

export const hopperBCAX5State: RollingStockState = {
  carType: CarType.HT,
  color: 'WHT',
  id: uuidv4(),
  length: 52,
  loaded: false,
  roadName: 'BCAX',
  roadNumber: 5,
};
export const boxcarCP1234State: RollingStockState = {
  carType: CarType.XM,
  color: 'RED',
  id: uuidv4(),
  length: 52,
  loaded: false,
  roadName: 'CPR',
  roadNumber: 1234,
};
export const boxcarBN9876State: RollingStockState = {
  carType: CarType.XM,
  color: 'GREEN',
  id: uuidv4(),
  length: 52,
  loaded: false,
  roadName: 'BN',
  roadNumber: 9876,
};

export const boxcarBN9876 = new RollingStock(boxcarBN9876State);
export const boxcarCP1234 = new RollingStock(boxcarCP1234State);
export const hopperBCAX5 = new RollingStock(hopperBCAX5State);
