import { train1, useTrainsData } from '../TrainsContext';
import { render } from '@testing-library/react';
import { Train } from '../../models/Train';
import { FakeTrainContext } from '../../test-configuration/FakeTrainContext';

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

function renderWithProvider(trainsToReturn: Train[] = []) {
  return render(
    <FakeTrainContext {...FakeTrainContext.defaultProps} trainsToReturn={trainsToReturn}>
      <TrainsTestConsumer />
    </FakeTrainContext>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', () => {
    const trainsConsumer = renderWithProvider();
    expect(trainsConsumer).toHaveElementsWithText('count: 0');
  });
  it('returns 1 train', () => {
    const trainsConsumer = renderWithProvider([train1]);
    expect(trainsConsumer).toHaveElementsWithText('count: 1');
  });
});
