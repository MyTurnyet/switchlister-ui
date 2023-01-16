import { DispatcherPage } from '../DispatcherPage';
import { render, RenderResult } from '@testing-library/react';
import {
  wrapWithFakeTrainRoutesContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { routeTwoStation } from '../../../test-configuration/FixtureRoutes';

describe('Dispatcher Page', () => {
  it('renders', () => {
    const dispatcherPage: RenderResult = render(
      wrapWithThemeProvider(wrapWithFakeTrainRoutesContext([routeTwoStation], <DispatcherPage />)),
    );
    expect(dispatcherPage).toHaveElementsWithText('All Train Routes', routeTwoStation.name);
  });
});
