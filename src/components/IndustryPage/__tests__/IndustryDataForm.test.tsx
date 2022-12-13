import React from 'react';
import { act, fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { IndustryDataForm } from '../IndustryDataForm';
import { wrapWithFakeStationsContext } from '../../../test-configuration/ReactTestToolkit';
import userEvent from '@testing-library/user-event';
import { wait } from '@testing-library/user-event/dist/utils';
import { station1, station2 } from '../../../test-configuration/FixtureTrains';

describe('Industry Data Form', () => {
  let industryForm: RenderResult;
  beforeEach(() => {
    industryForm = render(wrapWithFakeStationsContext(<IndustryDataForm />, [station1, station2]));
  });
  it('requires industry name', async () => {
    industryForm.getByPlaceholderText('Industry Name');
    fireEvent.submit(industryForm.getByRole('button'));
    await waitFor(() => {
      expect(industryForm).toHaveElementsWithText('You must enter an industry name.');
    });
  });
  it('requires a station selection', async () => {
    const stationSelector = industryForm.getByPlaceholderText('station selector');
    // userEvent.selectOptions(
    //   stationSelector,
    //   industryForm.getByRole('option', { name: 'station1' }),
    // );
    fireEvent.submit(industryForm.getByRole('button'));
    await waitFor(() => {
      expect(industryForm).toHaveElementsWithText('You must select a station for this industry.');
    });
  });
});
