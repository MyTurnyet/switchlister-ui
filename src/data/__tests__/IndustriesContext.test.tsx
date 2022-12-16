import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustriesProvider } from '../IndustriesContext';

const IndustryContextTesConsumer = () => {
  return <div>FOO!</div>;
};
describe('Industries Context', () => {
  let testConsumer: RenderResult;
  beforeEach(() => {
    testConsumer = render(
      <IndustriesProvider>
        <IndustryContextTesConsumer />
      </IndustriesProvider>,
    );
  });
  it('renders', () => {
    expect(testConsumer).toHaveElementsWithText('FOO!');
  });
});
