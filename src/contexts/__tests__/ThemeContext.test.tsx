import React, { useContext } from 'react';
import { ThemeContext, ThemeContextProvider } from '../ThemeContext';
import { fireEvent, render, RenderResult } from '@testing-library/react';

const TestingComponent = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <>
      <p>Dark is {String(dark)}</p>
      <button onClick={toggleDark} title={'test button'} />
    </>
  );
};
describe('ThemeContext', () => {
  let themeProvider: RenderResult;
  beforeEach(() => {
    themeProvider = render(
      <ThemeContextProvider>
        <TestingComponent />
      </ThemeContextProvider>,
    );
  });

  it('defaults color mode to light', () => {
    themeProvider.getByText('Dark is false');
  });
  it('toggles theme when button is pushed', () => {
    fireEvent.click(themeProvider.getByTitle(/test button/i));
    themeProvider.getByText('Dark is true');
  });
});
