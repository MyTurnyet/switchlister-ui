import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { expect } from '@jest/globals';
import { Train } from '../models/Train';
import { FakeTrainContext } from './FakeTrainContext';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';
import { FakeStationsContext } from './FakeStationsContext';
import { Station } from '../models/Station';
import { FakeRollingStockContext } from './FakeRollingStockContext';
import { RollingStock, RollingStockState } from '../models/RollingStock';

export function clickButtonWithText(screen: RenderResult, stringToFind: string) {
  const button = screen.getByText(stringToFind);
  fireEvent.click(button);
}

export const mockHistory = createMemoryHistory();
mockHistory.push = jest.fn();

export function expectHistoryCalledWith(pathname: string, calledFromLink = false) {
  expect(mockHistory.push).toHaveBeenCalledWith(
    expect.objectContaining({
      hash: '',
      pathname: pathname,
      search: '',
    }),
    undefined,
    calledFromLink
      ? {
          preventScrollReset: undefined,
          relative: undefined,
          replace: false,
          state: undefined,
        }
      : {},
  );
}

function wrapWithRouter(element: JSX.Element, location: string | Partial<Location>) {
  return (
    <Router location={location} navigator={mockHistory}>
      {element}
    </Router>
  );
}

export function renderWithRouter(
  element: JSX.Element,
  location: string | Partial<Location> = mockHistory.location,
): RenderResult {
  return render(wrapWithRouter(element, location));
}
export function wrapWithThemeProvider(children: JSX.Element) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export function wrapWithFakeStationsContext(
  stationsToReturn: Station[] = [],
  children: JSX.Element,
) {
  return <FakeStationsContext stationsToReturn={stationsToReturn}>{children}</FakeStationsContext>;
}
export function wrapWithFakeRollingStockContext(
  carsToReturn: RollingStock[] = [],
  children: JSX.Element,
) {
  return <FakeRollingStockContext carsToReturn={carsToReturn}>{children}</FakeRollingStockContext>;
}

export function wrapWithFakeTrainContext(
  trainsToReturn: Train[] = [],
  trainWithIdToReturn: Train = Train.EMPTY_TRAIN,
  children: JSX.Element,
) {
  return (
    <FakeTrainContext trainsToReturn={trainsToReturn} trainToReturnById={trainWithIdToReturn}>
      {children}
    </FakeTrainContext>
  );
}
