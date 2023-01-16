import { NavBar } from '../NavBar';
import {
  clickButtonWithText,
  expectHistoryCalledWith,
  renderWithRouter,
} from '../../../test-configuration/ReactTestToolkit';
import { RenderResult } from '@testing-library/react';

describe('Nav Bar', () => {
  let renderAPI: RenderResult;
  beforeEach(() => {
    renderAPI = renderWithRouter(<NavBar />);
  });
  function clickLink(linkName: string) {
    clickButtonWithText(renderAPI, linkName);
  }

  it('should render the correct text', () => {
    expect(renderAPI).toHaveElementsWithText('Home', 'Rolling Stock', 'Dispatcher');
  });
  it('should render home link', () => {
    clickLink('Home');
    expectHistoryCalledWith('/home', true);
  });
  it('should render dispatcher link', () => {
    clickLink('Dispatcher');
    expectHistoryCalledWith('/dispatcher', true);
  });
  it('should render rolling stock link', () => {
    clickLink('Rolling Stock');
    expectHistoryCalledWith('/rollingstock', true);
  });
});
