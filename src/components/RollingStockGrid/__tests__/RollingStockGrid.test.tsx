import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStockProvider } from '../../../data/RollingStockContext';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', async () => {
    const rollingStockGrid: RenderResult = render(
      <RollingStockProvider>
        <RollingStockGrid />
      </RollingStockProvider>,
    );

    rollingStockGrid.getByText('Loading!');
    await waitFor(() => {
      rollingStockGrid.getByText('BCAX 5');
    });
  });
});
