import { render, RenderResult } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStockState } from '../../../models/RollingStock';
import { hopperBCAX5State } from '../../../testData/FixtureRollingStock';
import { RollingStockProvider } from '../../../data/RollingStockContext';

const allRollingStock: RollingStockState[] = [hopperBCAX5State];

export const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => allRollingStock,
  } as Response);

describe('rolling stock grid', () => {
  let spyInstance: jest.SpyInstance<
    Promise<Response>,
    [input: RequestInfo | URL, init?: RequestInit | undefined]
  >;
  beforeEach(() => {
    spyInstance = jest.spyOn(global, 'fetch');
    spyInstance.mockResolvedValue(assetsFetchMock());
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('takes a list of rolling stock', () => {
    const rollingStockGrid: RenderResult = render(
      <RollingStockProvider>
        <RollingStockGrid />
      </RollingStockProvider>,
    );
    expect(spyInstance).toBeCalled();
    rollingStockGrid.getByText('Loading!');
  });
});
