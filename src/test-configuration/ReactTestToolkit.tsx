import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { expect } from '@jest/globals';
import { Train } from '../models/Train';
import { FakeTrainContext } from './FakeTrainContext';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/MainTheme';
import { FakeStationsProvider } from './FakeStationsContext';

export function pressButtonWithText(screen: RenderResult, stringToFind: string) {
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

export function wrapWithFakeTrainContext(
  children: JSX.Element,
  trainsToReturn: Train[] = [],
  trainWithIdToReturn: Train = Train.EMPTY_TRAIN,
) {
  return (
    <FakeTrainContext trainsToReturn={trainsToReturn} trainToReturnById={trainWithIdToReturn}>
      {children}
    </FakeTrainContext>
  );
}

export function wrapWithFakeStationsProvider(children: JSX.Element) {
  return <FakeStationsProvider>{children}</FakeStationsProvider>;
}
