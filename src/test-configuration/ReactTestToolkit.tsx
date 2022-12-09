import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export function pressButtonWithText(screen: RenderResult, stringToFind: string) {
  const button = screen.getByText(stringToFind);
  fireEvent.click(button);
}

export const mockHistory = createMemoryHistory();
mockHistory.push = jest.fn();

export function expectHistoryCalledWith(pathname: string) {
  console.log(mockHistory);
  expect(mockHistory.push).toHaveBeenCalledWith(
    {
      hash: '',
      pathname: pathname,
      search: '',
    },
    undefined,
    { preventScrollReset: undefined, relative: undefined, replace: false, state: undefined },
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
