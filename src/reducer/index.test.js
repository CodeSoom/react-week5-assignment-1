import reducer from '.';

import {
  setCategories,
  setRegionNames,
} from '../actions';

describe('reducer', () => {
  describe('setRegionNames', () => {
    it('changes restaurant region names', () => {
      const state = reducer(
        {
          regionNames: [],
        },
        setRegionNames([{
          id: 1,
          name: '부산',
        }]),
      );

      expect(state.regionNames).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes restaurant categories', () => {
      const state = reducer(
        {
          categories: [],
        },
        setCategories([{
          id: 1,
          name: '한식',
        }]),
      );

      expect(state.categories).toHaveLength(1);
    });
  });
});
