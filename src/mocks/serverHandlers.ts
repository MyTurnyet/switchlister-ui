import { defaultGetTrains } from './trainApiHandlers';
import { defaultGetRollingStock } from './rollingStockApiHandlers';

export const handlers = [defaultGetRollingStock, defaultGetTrains];
