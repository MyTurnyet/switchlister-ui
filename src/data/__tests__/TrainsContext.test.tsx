import { train1, useTrainsData } from '../TrainsContext';
import { Train } from '../../models/Train';
import { renderWithFakeTrainContext } from '../../test-configuration/ReactTestToolkit';

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
  return renderWithFakeTrainContext(<TrainsTestConsumer />, trainsToReturn);
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
