import { RollingStockProvider, useRollingStockData } from '../RollingStockContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStock, RollingStockState } from '../../models/RollingStock';
import { mswServer } from '../../mocks/msw-server';
import { rollingStockApiCall } from '../../mocks/serverHandlers';

const TestRollingStockConsumer = () => {
  const contextState = useRollingStockData();
  const carsReturned = contextState.rollingStock.length;
  return (
    <div>
      count: {carsReturned}
      {carsReturned === 0 && <div>No cars were returned.</div>}
      {contextState.rollingStock.map((item: RollingStock, index: number) => {
        return <div key={index}>{item.displayName}</div>;
      })}
    </div>
  );
};

function renderWithProvider(): RenderResult {
  return render(
    <RollingStockProvider>
      <TestRollingStockConsumer />)
    </RollingStockProvider>,
  );
}

describe('rolling stock context', () => {
  const noCarsWereReturned = 'No cars were returned.';
  it('renders with 0 items', async () => {
    mswServer.use(rollingStockApiCall<RollingStockState[]>('rollingStock', []));
    const testConsumer = renderWithProvider();
    await waitFor(() => {
      expect(testConsumer).toHaveElementsWithText('count: 0', noCarsWereReturned);
    });
  });
  it('renders with 2 items', async () => {
    const testConsumer = renderWithProvider();
    await waitFor(() => {
      expect(testConsumer).toHaveElementsWithText('count: 2', 'BCAX 5', 'CPR 1234');
      expect(testConsumer).toNotHaveElementsWithText(noCarsWereReturned);
    });
  });
});
