import { ItemStateCollection } from '../ItemStateCollection';
import { createReactState } from '../../../test-configuration/ReactTestToolkit';
import { IndustryState } from '../../Industry';

describe('Item State Collection', () => {
  describe('creates collection in react state', () => {
    it('from an empty array', () => {
      const industriesState = createReactState<IndustryState[]>([]);
      const itemStateCollection: ItemStateCollection = new ItemStateCollection([], industriesState);
      expect(industriesState.setValue).toHaveBeenCalledWith([]);
      expect(itemStateCollection.isEmpty()).toEqual(true);
      expect(itemStateCollection.count).toEqual(0);
    });
  });
});
