import { NavBar } from '../NavBar';
import {
  expectHistoryCalledWith,
  pressButtonWithText,
  renderWithRouter,
} from '../../../test-configuration/ReactTestToolkit';
import { RenderResult } from '@testing-library/react';

describe('Nav Bar', () => {
  let renderAPI: RenderResult;
  beforeEach(() => {
    renderAPI = renderWithRouter(<NavBar />);
  });
  function clickLink(linkName: string) {
    pressButtonWithText(renderAPI, linkName);
  }

  it('should render the correct text', () => {
    expect(renderAPI).toHaveElementsWithText('Home', 'Rolling Stock');
  });
  it('should render home link', () => {
    clickLink('Home');
    expectHistoryCalledWith('/home', true);
  });
  it('should render rolling stock link', () => {
    clickLink('Rolling Stock');
    expectHistoryCalledWith('/rollingstock', true);
  });
});
