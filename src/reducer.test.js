import reducer, { initialState } from './reducer';

import regions from '../fixtures/regions';

describe('reducer', () => {
  context('without parameter', () => {
    it('returns the initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });

  context('with undefined action type', () => {
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
  describe('setRegions', () => {
    it('returns regions', () => {
      
    });
  });
});
