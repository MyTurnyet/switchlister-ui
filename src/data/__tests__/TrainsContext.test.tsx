import { train1, useTrainsData } from '../TrainsContext';
import { Train } from '../../models/Train';
import { wrapWithFakeTrainContext } from '../../test-configuration/ReactTestToolkit';
import { render } from '@testing-library/react';

const TrainsTestConsumer = () => {
  const { trains } = useTrainsData();
  return (
    <div>
      <div>count: {trains.length}</div>
      {trains.map((train) => (
        <div key={train.name}>{train.name}</div>
      ))}
    </div>
  );
};

function renderTrainConsumer(trainsToReturn: Train[] = []) {
  return render(wrapWithFakeTrainContext(<TrainsTestConsumer />, trainsToReturn));
}

describe('trains context', () => {
  it('returns 0 trains', () => {
    const trainsConsumer = renderTrainConsumer();
    expect(trainsConsumer).toHaveElementsWithText('count: 0');
  });
  it('returns 1 train', () => {
    const trainsConsumer = renderTrainConsumer([train1]);
    expect(trainsConsumer).toHaveElementsWithText('count: 1');
  });
});
