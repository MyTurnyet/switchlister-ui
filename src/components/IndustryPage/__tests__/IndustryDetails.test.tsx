import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryDetails } from '../IndustryDetails';
import { industry6, industry7 } from '../../../test-configuration/FixtureTrains';
import {
  wrapWithFakeStationsContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { Industry } from '../../../models/Industry';

describe('Industry Details', () => {
  let industryDetails: RenderResult;

  function renderIndustryWith(industry: Industry) {
    return render(
      wrapWithThemeProvider(wrapWithFakeStationsContext(<IndustryDetails industry={industry} />)),
    );
  }

  beforeEach(() => {
    industryDetails = renderIndustryWith(industry7);
  });

  it('displays the name', () => {
    expect(industryDetails).toHaveElementsWithText(industry7.name);
  });
  it('has serviced car types', () => {
    expect(industryDetails).toHaveElementsWithText('Car types accepted: XM, HT', 'Holds 3 cars');
  });
  it('shows a pluralized car count', () => {
    expect(industryDetails).toHaveElementsWithText('Holds 3 cars');
  });
  it('shows a singular car count', () => {
    industryDetails = renderIndustryWith(industry6);
    expect(industryDetails).toHaveElementsWithText('Holds 1 car');
  });
});
