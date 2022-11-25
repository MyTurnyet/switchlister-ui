import { render, RenderResult } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStock, RollingStockState } from '../../../models/RollingStock';
import { boxcarCP1234, hopperBCAX5, hopperBCAX5State } from '../../../testData/FixtureRollingStock';
import { RollingStockProvider } from '../../../data/RollingStockContext';

const allRollingStock: RollingStockState[] = [hopperBCAX5State];

export const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => allRollingStock,
  } as Response);

describe('rolling stock grid', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('takes a list of rolling stock', () => {
    const rollingStockGrid: RenderResult = render(
      <RollingStockProvider>
        <RollingStockGrid rollingStockList={[]} />
      </RollingStockProvider>,
    );
    // rollingStockGrid.getByText(hopperBCAX5.displayName);
  });
});
