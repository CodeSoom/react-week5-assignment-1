import reducer from './reducer';

const initialState = {
  filter: {
    region: '',
    categoryId: 0,
  },
};

describe('reducer', () => {
  context('without state nor action', () => {
    it('returns state', () => {
      expect(reducer()).toEqual(initialState);
    });
  });
});
