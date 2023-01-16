import { DispatcherPage } from '../DispatcherPage';
import { RenderResult } from '@testing-library/react';
import {
  renderWithRouter,
  wrapWithFakeTrainRoutesContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { routeTwoStation } from '../../../test-configuration/FixtureRoutes';

describe('Dispatcher Page', () => {
  it('renders', () => {
    const dispatcherPage: RenderResult = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainRoutesContext([routeTwoStation], <DispatcherPage />)),
    );
    expect(dispatcherPage).toHaveElementsWithText('All Train Routes', routeTwoStation.name);
  });
});
