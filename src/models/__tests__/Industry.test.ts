import { Industry, IndustryState } from '../Industry';

describe('Industry', () => {
  it('creates', () => {
    const industryState: IndustryState = { name: 'Industry 1' };
    const industry = new Industry(industryState);
    expect(industry.name).toEqual(industryState.name);
  });
});
