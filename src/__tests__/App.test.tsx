import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders', () => {
    render(<App />);
  });
  it('renders all trains by default', () => {
    const app: RenderResult = render(<App />);
    app.getByText('All Trains');
  });
});
