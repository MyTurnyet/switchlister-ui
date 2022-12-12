import { defaultGetRollingStock } from './handlers/rollingStockApiHandlers';
import { defaultGetTrains } from './handlers/trainApiHandlers';
import { defaultGetStations } from './handlers/stationHandlers';

export const handlers = [defaultGetRollingStock, defaultGetTrains, defaultGetStations];
