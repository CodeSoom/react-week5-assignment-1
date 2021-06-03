import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('get regions obeject and changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('get categories obeject and changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('Default action', () => {
    it('return state', () => {
      const state = reducer();

      expect(state.regions).toHaveLength(0);
    });
  });
});
