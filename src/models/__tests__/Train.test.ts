import { Train } from '../Train';

describe('Train', () => {
  it('always has a name', () => {
    const train = new Train('test name');
    expect(train.name).toEqual('test name');
  });
});
