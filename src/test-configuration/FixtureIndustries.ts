import { IndustryState } from '../models/Industry';
import { IndustryBuilder } from '../models/IndustryBuilder';
import { station1State, station3State, station4State } from './FixtureStations';
import { CarType } from '../models/RollingStock';
import { boxcarCP1234State, hopperBCAX5State, overheightCP2468, overheightCP2468State } from './FixtureRollingStock'

export const industryBuilder1 = new IndustryBuilder()
  .stationState(station1State)
  .name('Industry 1')
  .placedCars(boxcarCP1234State, hopperBCAX5State)
  .servicedCarTypes(CarType.XM, CarType.HT);
const industryBuilder2 = new IndustryBuilder()
  .stationState(station1State)
  .name('Industry 2')
  .servicedCarTypes(CarType.XM);
const industryBuilder3 = new IndustryBuilder()
  .stationState(station1State)
  .name('Industry 3')
  .servicedCarTypes(CarType.HT);
const industryBuilder4 = new IndustryBuilder()
  .stationState(station4State)
  .name('Industry 4')
  .placedCars(overheightCP2468State)
  .servicedCarTypes(CarType.XMO);
const industryBuilder5 = new IndustryBuilder()
  .stationState(station4State)
  .name('Industry 5')
  .servicedCarTypes(CarType.XMO, CarType.XM);
const industryBuilder6 = new IndustryBuilder()
  .stationState(station3State)
  .name('Industry 6')
  .servicedCarTypes(CarType.All);
const industryBuilder7 = new IndustryBuilder()
  .stationState(station4State)
  .name('Industry 7')
  .servicedCarTypes(CarType.XM, CarType.HT)
  .placedCars(boxcarCP1234State, hopperBCAX5State)
  .maxCarCount(3);
export const industry1State: IndustryState = industryBuilder1.toState();
export const industry2State: IndustryState = industryBuilder2.toState();
export const industry3State: IndustryState = industryBuilder3.toState();
export const industry4State: IndustryState = industryBuilder4.toState();
export const industry5State: IndustryState = industryBuilder5.toState();
export const industry6State: IndustryState = industryBuilder6.toState();
export const industry7State: IndustryState = industryBuilder7.toState();
export const industry1 = industryBuilder1.toIndustry();
export const industry2 = industryBuilder2.toIndustry();
export const industry3 = industryBuilder3.toIndustry();
export const industry4 = industryBuilder4.toIndustry();
export const industry5 = industryBuilder5.toIndustry();
export const industry6 = industryBuilder6.toIndustry();
export const industry7 = industryBuilder7.toIndustry();
