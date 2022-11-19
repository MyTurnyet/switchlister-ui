import { render, RenderResult } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import { RollingStock } from '../../../models/RollingStock';
import { boxcarCP1234, hopperBCAX5 } from '../../../testData/FixtureRollingStock';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', () => {
    const allCars: RollingStock[] = [hopperBCAX5, boxcarCP1234];
    const rollingStockGrid: RenderResult = render(<RollingStockGrid rollingStockList={allCars} />);
    rollingStockGrid.getByText(hopperBCAX5.displayName);
    rollingStockGrid.getByText(boxcarCP1234.displayName);
  });
});
