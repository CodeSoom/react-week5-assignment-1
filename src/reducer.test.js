import reducer from './reducer';

jest.mock('react-redux');

describe('Reducer', () => {
  it('returns initialState', () => {
    expect(reducer()).toMatchObject({
      categories: [],
    });
  });
});
