import { Train } from './Train';
import { TrainBuilder } from './TrainBuilder';
import { Itinerary } from './Itinerary';
import { CarType, RollingStock } from './RollingStock';
import { IndustryCollection } from './collections/IndustryCollection';

export class Dispatcher {
  private assignedTrain: Train = TrainBuilder.EMPTY_TRAIN;

  constructor(private itinerary: Itinerary, private industries: IndustryCollection) {}

  findCarForPickup(carType: CarType): RollingStock {
    return RollingStock.EMPTY;
  }
}
