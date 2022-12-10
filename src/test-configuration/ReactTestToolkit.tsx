import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { expect } from '@jest/globals';
import { Train } from '../models/Train';
import { FakeTrainContext } from './FakeTrainContext';

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

function getRouter(element: JSX.Element, location: string | Partial<Location>) {
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
  return render(getRouter(element, location));
}

export function renderWithFakeTrainContext(children: JSX.Element, trainsToReturn: Train[] = []) {
  return render(
    <FakeTrainContext trainsToReturn={trainsToReturn} trainToReturnById={Train.EMPTY_TRAIN}>
      {children}
    </FakeTrainContext>,
  );
}
