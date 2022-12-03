import { RollingStockPage } from '../RollingStockPage';
import { render, RenderResult } from '@testing-library/react';

describe('rolling stock page', () => {
  it('exists', () => {
    const rollingStockPage: RenderResult = render(<RollingStockPage />);
    // rollingStockPage.getByText('BCAX 5');
  });
});
