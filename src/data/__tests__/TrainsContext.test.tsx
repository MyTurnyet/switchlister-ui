import { TrainsProvider, useTrainsData } from '../TrainsContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { mswServer } from '../../api-mocks/msw-server';
import { useEffect } from 'react';
import { ApiHandler } from '../../api-mocks/handlers/ApiHandler';

const TrainsTestConsumer = () => {
  const { trainCollection, refreshTrainsData } = useTrainsData();

  useEffect(() => {
    refreshTrainsData();
  });

  return (
    <div>
      <div>count: {trainCollection.count}</div>
      {trainCollection.map((train) => (
        <div key={train.name}>{train.name}</div>
      ))}
    </div>
  );
};

function renderTrainConsumer(): RenderResult {
  return render(
    <TrainsProvider>
      <TrainsTestConsumer />
    </TrainsProvider>,
  );
}

describe('trains context', () => {
  it('returns 0 trains', async () => {
    mswServer.use(ApiHandler.createApiGet('trains', []));
    const trainsConsumer = renderTrainConsumer();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 0');
    });
  });
  it('returns 2 train', async () => {
    const trainsConsumer = renderTrainConsumer();
    await waitFor(() => {
      expect(trainsConsumer).toHaveElementsWithText('count: 2');
    });
  });
  it('throws if not wrapped with TrainsProvider', () => {
    expect(() => render(<TrainsTestConsumer />)).toThrowError(
      new Error(
        'useTrainsData must be used inside of a TrainsProvider, ' +
          'otherwise it will not function correctly.',
      ),
    );
  });
});
