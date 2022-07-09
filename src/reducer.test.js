import { categories, regions } from '../__fixture__/restaurantsInfo';
import { setCategories, setRegions } from './action';

import reducer from './reducer';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역목록이 바뀜', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategories', () => {
    it('카테고리 목록이 바뀜', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });
});
