import { Train } from '../models/Train';

export class TrainMaker {
  constructor(private train: Train) {}

  get pickUpList(): string[] {
    return ['CP 1234'];
  }
}
