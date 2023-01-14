import { Station } from './Station';

export type RouteOptions = Station | Station[];

export class Route {
  private readonly _stations: Station[];

  constructor(private routeOptions: RouteOptions) {
    if (routeOptions instanceof Station) {
      this._stations = [routeOptions];
      return;
    }
    this._stations = routeOptions;
  }

  get stations(): Station[] {
    return this._stations;
  }
}
