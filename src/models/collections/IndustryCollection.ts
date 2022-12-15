import { ItemCollection } from './ItemCollection';
import { Industry, IndustryState } from '../Industry';

export class IndustryCollection extends ItemCollection<Industry> {
  static createFromIndustryStateArray(stateArray: IndustryState[]): IndustryCollection {
    const industries: Industry[] = stateArray.map(
      (industryState: IndustryState) => new Industry(industryState),
    );
    return new IndustryCollection(industries);
  }

  findById(idForSearch: string): Industry {
    const foundIndustry = this.items.find((industry: Industry) => industry.id === idForSearch);
    if (foundIndustry === undefined) {
      return Industry.EMPTY;
    }
    return foundIndustry;
  }
}
