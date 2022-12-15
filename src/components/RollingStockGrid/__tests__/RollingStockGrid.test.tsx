import { render, RenderResult, waitFor } from '@testing-library/react';
import { RollingStockGrid } from '../RollingStockGrid';
import {
  wrapWithFakeRollingStockContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { boxcarCP1234, hopperBCAX5 } from '../../../test-configuration/FixtureRollingStock';

describe('rolling stock grid', () => {
  it('takes a list of rolling stock', async () => {
    const rollingStockGrid: RenderResult = render(
      wrapWithFakeRollingStockContext(
        [hopperBCAX5, boxcarCP1234],
        false,
        wrapWithThemeProvider(<RollingStockGrid />),
      ),
    );
    expect(rollingStockGrid).toHaveElementsWithText('BCAX 5', 'CPR 1234');
  });
});
