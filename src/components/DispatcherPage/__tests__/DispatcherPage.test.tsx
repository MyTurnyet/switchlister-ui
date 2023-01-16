import { DispatcherPage } from '../DispatcherPage';
import { RenderResult } from '@testing-library/react';
import {
  renderWithRouter,
  wrapWithFakeTrainRoutesContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { routeTwoStation } from '../../../test-configuration/FixtureRoutes';

describe('Dispatcher Page', () => {
  let dispatcherPage: RenderResult;
  beforeEach(() => {
    dispatcherPage = renderWithRouter(
      wrapWithThemeProvider(wrapWithFakeTrainRoutesContext([routeTwoStation], <DispatcherPage />)),
    );
  });
  it('renders', () => {
    expect(dispatcherPage).toHaveElementsWithText('All Train Routes', routeTwoStation.name);
  });
});
