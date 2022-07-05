import reducer from './reducer';

describe('reducer', () => {
  context('without state', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      selectedRegion: null,
      selectedCategory: null,
    };

    it('has the initial state', () => {
      const state = reducer(
        undefined,
        { type: undefined },
      );

      expect(state).toEqual(initialState);
    });
  });

  context('with unhandled actions', () => {
    it('does nothing', () => {
      const state = reducer(
        {
          restaurants: [],
        },
        { type: undefined },
      );

      expect(state).toEqual({ restaurants: [] });
    });
  });
});
