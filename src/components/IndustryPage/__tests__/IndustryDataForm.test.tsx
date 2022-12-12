import React from 'react';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { IndustryDataForm } from '../IndustryDataForm';
import { wrapWithFakeTrainContext } from '../../../test-configuration/ReactTestToolkit';
import { train1 } from '../../../test-configuration/FixtureTrains';

describe('Industry Data Form', () => {
  let industryForm: RenderResult;
  beforeEach(() => {
    industryForm = render(wrapWithFakeTrainContext(<IndustryDataForm />, [train1]));
  });
  it('requires industry name', async () => {
    industryForm.getByPlaceholderText('Industry Name');
    fireEvent.submit(industryForm.getByRole('button'));
    await waitFor(() => {
      expect(industryForm).toHaveElementsWithText('You must enter an industry name.');
    });
  });
});
