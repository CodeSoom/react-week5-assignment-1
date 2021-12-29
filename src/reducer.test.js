import reducer from './reducer';

import {
  setCategories,
  setRegions,
  setSelectedRegion,
  setSelectedCategory,
} from './actions';

import { categories } from '../__fixtures__/categories';
import { regions } from '../__fixtures__/regions';

describe('redcuer', () => {
  const previousState = {
    categories: [],
    regions: [],
    selectedRegion: '',
    selectedCategory: '',
  };

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  describe('set selectedCategory', () => {
    it('changes selectedCategory', () => {
      const state = reducer(previousState, setSelectedCategory('한식'));

      expect(state.selectedCategory).toBe('한식');
    });
  });

  describe('set Regions', () => {
    it('changes regions', () => {
      const state = reducer(previousState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  describe('set selectedRegion', () => {
    it('changes selectedRegion', () => {
      const state = reducer(previousState, setSelectedRegion('서울'));

      expect(state.selectedRegion).toBe('서울');
    });
  });
});
