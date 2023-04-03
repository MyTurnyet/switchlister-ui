import { ReactState } from '../../state-management/ReactState';
import { IndustryState } from '../Industry';

export class ItemStateCollection {
  constructor(param: any[], industriesState: ReactState<IndustryState[]>) {
    industriesState.setValue(param);
  }

  get count(): number {
    return 0;
  }

  isEmpty(): boolean {
    return true;
  }
}
