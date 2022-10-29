import { render } from '@testing-library/react';
import { TrainPage } from '../TrainPage';

describe('TrainPage', () => {
  it('renders without crashing', () => {
    render(<TrainPage />);
  });
});
