import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryDetails } from '../IndustryDetails';
import {
  wrapWithFakeStationsContext,
  wrapWithThemeProvider,
} from '../../../test-configuration/ReactTestToolkit';
import { Industry } from '../../../models/Industry';
import { industry6, industry7 } from '../../../test-configuration/FixtureIndustries';

describe('Industry Details', () => {
  let industryDetails: RenderResult;

  function renderIndustryWith(industry: Industry) {
    return render(
      wrapWithThemeProvider(
        wrapWithFakeStationsContext([], <IndustryDetails industry={industry} />),
      ),
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
    const industryDetails1Car = renderIndustryWith(industry6);
    expect(industryDetails1Car).toHaveElementsWithText('Holds 1 car');
  });
  it('shows rolling stock at the industry', () => {
    expect(industryDetails).toHaveElementsWithText('Cars at industry:', 'CPR 1234', 'BCAX 5');
  });
  it('shows no rolling stock at the industry', () => {
    const industryDetailsNoRollingStock = renderIndustryWith(industry6);
    expect(industryDetailsNoRollingStock).toHaveElementsWithText('Cars at industry: None');
  });
});
