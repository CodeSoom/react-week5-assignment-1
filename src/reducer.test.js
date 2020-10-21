import reducer from './reducer';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import {
  setRegions,
  setCategories,
  selectCategory,
  selectRegion,
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
    it('changes selectedCategory', () => {
      const state = reducer({
        categories,
        selectedCategory: '',
      }, selectCategory(categories[0].id));

      expect(state.selectedCategory).toBe(categories[0].id);
    });
  });

  describe('selectRegion', () => {
    const { id, name } = regions[0];

    it('changes selectedRegion', () => {
      const state = reducer({
        regions,
        selectedRegion: '',
      }, selectRegion({ id, name }));

      expect(state.selectedRegion).toBe(regions[0].name);
    });
  });
});
