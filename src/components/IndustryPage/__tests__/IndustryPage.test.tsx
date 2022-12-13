import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryPage } from '../IndustryPage';
import { industry7 } from '../../../test-configuration/FixtureTrains';

describe('Industry Page', () => {
  let industryPage: RenderResult;
  beforeEach(() => {
    industryPage = render(<IndustryPage industry={industry7} />);
  });
  it('displays the name', () => {
    expect(industryPage).toHaveElementsWithText(industry7.name);
  });
  it('has serviced car types', () => {
    expect(industryPage).toHaveElementsWithText('Car types accepted at this industry:', 'XM', 'HT');
  });
});
