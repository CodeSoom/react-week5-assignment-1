import reducer from './reducer';

const initialState = {
  categories: [],
};

describe('reducer', () => {
  context('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state).not.toHaveLength(0);
    });
  });
});
