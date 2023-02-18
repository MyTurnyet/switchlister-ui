import { Train, TrainState } from '../models/Train';
import { TrainBuilder } from '../models/TrainBuilder';

const trainBuilderLocal = new TrainBuilder().name('Local Express');
const trainBuilderAnother = new TrainBuilder().name('Another Train');
const trainBuilderPickUpCars = new TrainBuilder().name('CarsToPickUp');
export const train1State: TrainState = trainBuilderLocal.toState();
export const train2State: TrainState = trainBuilderAnother.toState();
export const train1: Train = trainBuilderLocal.toTrain();

export const train2 = trainBuilderAnother.toTrain();
export const trainToPickUpCars = trainBuilderPickUpCars.toTrain();
