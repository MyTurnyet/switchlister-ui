import React from 'react';
import { RenderResult } from '@testing-library/react';
import { IndustryPage } from '../IndustryPage';
import { industry7 } from '../../../test-configuration/FixtureTrains';
import { Route, Routes } from 'react-router-dom';
import {
  renderWithRouter,
  wrapWithFakeStationsContext,
} from '../../../test-configuration/ReactTestToolkit';

describe('Industry Page', () => {
  let industryPage: RenderResult;
  beforeEach(() => {
    industryPage = renderWithRouter(
      wrapWithFakeStationsContext(
        <Routes>
          <Route path={'/industry/:id'} element={<IndustryPage industry={industry7} />}></Route>
        </Routes>,
      ),
    );
  });
  it('displays the name', () => {
    expect(industryPage).toHaveElementsWithText(industry7.name);
  });
  it('has serviced car types', () => {
    expect(industryPage).toHaveElementsWithText('Car types accepted at this industry:', 'XM', 'HT');
  });
});
