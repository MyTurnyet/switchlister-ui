import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { IndustryDetails } from '../IndustryDetails';
import { industry7 } from '../../../test-configuration/FixtureTrains';
import { Route, Routes } from 'react-router-dom';
import {
  renderWithRouter,
  wrapWithFakeStationsContext,
} from '../../../test-configuration/ReactTestToolkit';

describe('Industry Details', () => {
  let industryDetails: RenderResult;
  beforeEach(() => {
    industryDetails = render(wrapWithFakeStationsContext(<IndustryDetails industry={industry7} />));
  });

  it('displays the name', () => {
    expect(industryDetails).toHaveElementsWithText(industry7.name);
  });
  it('has serviced car types', () => {
    expect(industryDetails).toHaveElementsWithText(
      'Car types accepted at this industry:',
      'XM',
      'HT',
    );
  });
});