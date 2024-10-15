import { ItemCollection } from './ItemCollection'
import { Industry, IndustryState } from '../Industry'
import { Station } from '../Station'
import { IndustryBuilder } from '../IndustryBuilder'
import { CarType, RollingStock } from '../RollingStock'

export interface NeededCarTypesDictionary {
  [index: string]: number;
}

export class IndustryCollection extends ItemCollection<Industry> {
  static createFromIndustryStateArray(stateArray: IndustryState[]): IndustryCollection {
    const industries: Industry[] = stateArray.map((industryState: IndustryState) =>
      new IndustryBuilder(industryState).toIndustry(),
    )
    return new IndustryCollection(industries)
  }

  findById(idForSearch: string): Industry {
    const foundIndustry = this.items.find((industry: Industry) => industry.id === idForSearch)
    if (foundIndustry === undefined) {
      return IndustryBuilder.EMPTY_INDUSTRY
    }
    return foundIndustry
  }

  getIndustriesForStation(station: Station) {
    const industries = this.items.filter((industry: Industry) => industry.stationId === station.id)
    return new IndustryCollection(industries)
  }

  neededCarTypes(): NeededCarTypesDictionary {
    const neededCarTypes: NeededCarTypesDictionary = {}

    this.items.forEach((item: Industry) => {
      item.servicedCarTypes.forEach((carType: string) => {
        this.addDefaultIndexIfNeeded(neededCarTypes, carType)
        neededCarTypes[carType] += 1
      })
    })
    return neededCarTypes
  }

  private addDefaultIndexIfNeeded(neededCarTypes: NeededCarTypesDictionary, carType: string) {
    if (neededCarTypes[carType] !== undefined) {
      return
    }
    neededCarTypes[carType] = 0
  }

  findCarForPickup(carType: CarType): RollingStock {
    return RollingStock.EMPTY
  }
}

export class IndustryCollectionBuilder {
  private industryStates: IndustryState[] = []

  addFromState(industryState: IndustryState): this {
    if (this.industryExistsInArray(industryState)) {
      return this
    }
    this.industryStates.push(industryState)
    return this
  }

  build(): IndustryCollection {
    return IndustryCollection.createFromIndustryStateArray(this.industryStates)
  }

  private industryExistsInArray(industryState: IndustryState) {
    return this.industryStates.some(
      (existingIndustry: IndustryState) => existingIndustry.name === industryState.id,
    )
  }
}
