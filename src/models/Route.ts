import { Station } from './Station';

export class Route {
  constructor(private routeStations: Station[]) {
    if (routeStations.length === 0) throw new Error('A Route must have at least one station.');
  }

  get stations(): Station[] {
    return this.routeStations;
  }
}
