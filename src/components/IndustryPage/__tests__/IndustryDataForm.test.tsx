import React from 'react';
import { act, fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { IndustryDataForm } from '../IndustryDataForm';
import { wrapWithFakeStationsContext } from '../../../test-configuration/ReactTestToolkit';
import { station1, station2 } from '../../../test-configuration/FixtureTrains';

describe('Industry Data Form', () => {
  let industryForm: RenderResult;
  beforeEach(() => {
    industryForm = render(wrapWithFakeStationsContext(<IndustryDataForm />, [station1, station2]));
  });
  describe('has fields', () => {
    it('industry name', async () => {
      industryForm.getByPlaceholderText('Industry Name');
    });
    it('station selector', async () => {
      industryForm.getByPlaceholderText('station selector');
      industryForm.getByRole('option', { name: 'Select one...' });
      industryForm.getByRole('option', { name: 'station1' });
      industryForm.getByRole('option', { name: 'station2' });
    });
  });
  describe('shows error when field is required', () => {
    beforeEach(() => fireEvent.submit(industryForm.getByRole('button')));
    it('industry name', async () => {
      await waitFor(() => {
        expect(industryForm).toHaveElementsWithText('You must enter an industry name.');
      });
    });
    it('station selection', async () => {
      await waitFor(() => {
        expect(industryForm).toHaveElementsWithText('You must select a station for this industry.');
      });
    });
  });
});
