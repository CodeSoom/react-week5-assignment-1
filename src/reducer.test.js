import reducer from './reducer';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import {
  setRegions,
  setCategories,
  selectCategory,
} from './actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
  };

  describe('undefined action', () => {
    it('changes nothing', () => {
      const state = reducer();

      expect(state.regions).toStrictEqual(initialState.regions);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectCategory', () => {
    it('changes categories', () => {
      const state = reducer({
        categories,
      }, selectCategory(categories[0].id));

      expect(state.categories[0].name).toBe(`${categories[0].name}(v)`);
    });
  });
});
