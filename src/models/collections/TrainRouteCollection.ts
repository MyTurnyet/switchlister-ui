import { ItemCollection } from './ItemCollection';
import { TrainRoute } from '../TrainRoute';

export class TrainRouteCollection extends ItemCollection<TrainRoute> {
  findById(idToFind: string): TrainRoute {
    const returnedRoute = this.items.find((route) => route.id === idToFind);
    if (returnedRoute === undefined) return TrainRoute.EMPTY_ROUTE;

    return returnedRoute;
  }
}
