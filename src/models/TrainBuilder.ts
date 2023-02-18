import { Train, TrainState } from './Train';
import { deepCopy } from '../state-management/helpers';
import { v4 as uuidv4 } from 'uuid';

const emptyTrainState: TrainState = { id: '', name: 'EMPTY' };

export class TrainBuilder {
  public static EMPTY_TRAIN = new Train(emptyTrainState);
  private readonly state: TrainState;

  constructor(defaultTrainState: TrainState = emptyTrainState) {
    this.state = deepCopy(defaultTrainState);
  }

  name(trainName: string): this {
    this.state.name = trainName;
    return this;
  }

  toTrain(): Train {
    return new Train(this.toState());
  }

  toState(): TrainState {
    if (this.state.id === '') {
      this.state.id = uuidv4();
    }
    return this.state;
  }
}
