import { Station, StationState } from '../models/Station';
import { StationBuilder } from '../models/StationBuilder';

export const eastBlock = 'EAST';
export const echoLakeBlock = 'ECHO LAKE';
export const westBlock = 'WEST';

const stationBuilder0 = new StationBuilder().stationName('station0').blockName(eastBlock);
export const station0State: StationState = stationBuilder0.toState();
const stationBuilder1 = new StationBuilder().stationName('station1').blockName(eastBlock);
export const station1State: StationState = stationBuilder1.toState();
const stationBuilder2 = new StationBuilder().stationName('station2').blockName(echoLakeBlock);
export const station2State: StationState = stationBuilder2.toState();
const stationBuilder3 = new StationBuilder().stationName('station3').blockName(westBlock);
export const station3State: StationState = stationBuilder3.toState();
const stationBuilder4 = new StationBuilder().stationName('station4').blockName(westBlock);
export const station4State: StationState = stationBuilder4.toState();

export const station1: Station = stationBuilder1.toStation();
export const station2: Station = stationBuilder2.toStation();
export const station3: Station = stationBuilder3.toStation();
export const station4: Station = stationBuilder4.toStation();
