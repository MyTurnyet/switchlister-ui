import { RollingStockProvider, useRollingStockData } from '../RollingStockContext';
import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStock, RollingStockState } from '../../models/RollingStock';
import { hopperBCAX5State } from '../../test-configuration/FixtureRollingStock';

const allRollingStock: RollingStockState[] = [hopperBCAX5State];

export const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => allRollingStock,
  } as Response);

const TestRollingStockConsumer = () => {
  const contextState = useRollingStockData();
  return (
    <div>
      count: {contextState.rollingStock.length}
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
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('renders with 0 items', async () => {
    const testConsumer = renderWithProvider();
    await waitFor(() => {
      testConsumer.getByText('count: 1');
      testConsumer.getByText('BCAX 5');
    });
  });
});
