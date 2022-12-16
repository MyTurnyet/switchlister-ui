import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryDataProvider } from '../api/IndustriesContext';

const IndustryContextTesConsumer = () => {
  return <div>FOO!</div>;
};
describe('Industries Context', () => {
  let testConsumer: RenderResult;
  beforeEach(() => {
    testConsumer = render(
      <IndustryDataProvider>
        <IndustryContextTesConsumer />
      </IndustryDataProvider>,
    );
  });
  it('renders', () => {
    expect(testConsumer).toHaveElementsWithText('FOO!');
  });
});
