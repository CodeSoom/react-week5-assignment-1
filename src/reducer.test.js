import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('without parameter', () => {
    it('returns the initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });

  context('with action type that is not defined', () => {
    it('returns the initial state', () => {
      // const initialState = {
      //   newId: 100,
      //   restaurant: {
      //     name: '',
      //     address: '',
      //     category: '',
      //   },
      //   restaurants: [],
      // };
      const state = reducer(initialState, { type: 'unknown' });
      expect(state).toEqual(initialState);
    });
  });
});
