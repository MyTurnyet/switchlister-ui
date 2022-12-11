import React from 'react';
import { render } from '@testing-library/react';
import { IndustryPage } from '../IndustryPage';
import { industry6 } from '../../../test-configuration/FixtureTrains';

describe('Industry Page', () => {
  it('displays the name', () => {
    const industryPage = render(<IndustryPage industry={industry6} />);
    expect(industryPage).toHaveElementsWithText(industry6.name);
  });
});
