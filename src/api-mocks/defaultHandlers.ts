import { defaultGetRollingStock } from './handlers/rollingStockApiHandlers';
import { defaultGetTrains } from './handlers/trainApiHandlers';
import { defaultGetStations } from './handlers/stationApiHandlers';
import { defaultGetIndustries } from './handlers/industryApiHandlers';
import { defaultGetRoutes } from './handlers/routesApiHandler';

export const handlers = [
  defaultGetRollingStock,
  defaultGetTrains,
  defaultGetStations,
  defaultGetIndustries,
  defaultGetRoutes,
];
