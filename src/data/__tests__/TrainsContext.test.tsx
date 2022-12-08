import { TrainsDataProvider, useTrainsData } from '../TrainsContext';
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
describe('trains context', () => {
  it('returns 2 trains', () => {
    const trainsConsumer = render(
      <TrainsDataProvider>
        <TrainsTestConsumer />
      </TrainsDataProvider>,
    );
    expect(trainsConsumer).toHaveElementsWithText('count: 2', 'Local Express', 'Another Train');
  });
});
