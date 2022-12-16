import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryDataProvider } from '../api/IndustriesContext';

const IndustryContextTesConsumer = () => {
  return <div>FOO!</div>;
};
describe('Industries Context', () => {
  it('renders', () => {
    const testConsumer: RenderResult = render(
      <IndustryDataProvider>
        <IndustryContextTesConsumer />
      </IndustryDataProvider>,
    );
  });
});
