import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  changeRegion,
  changeCategory,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      selectedRegion: {},
      selectedCategory: {},
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('set regions array', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(8);
    });
  });
  describe('setCategories', () => {
    it('set categories array', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(6);
    });
  });

  describe('setRestaurants', () => {
    it('click 서울 한식', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
  describe('changeRegion', () => {
    const initialState = {
      regions,
      selectedRegion: {},
    };
    it('change Region 서울', () => {
      const state = reducer(initialState, changeRegion(1));
      expect(state.selectedRegion.name).toBe('서울');
    });
    it('change Region 부산', () => {
      const state = reducer(initialState, changeRegion(4));

      expect(state.selectedRegion.name).toBe('부산');
    });
  });

  describe('changeCategory', () => {
    const initialState = {
      categories,
      categoryId: 0,
    };
    it('change Category 한식', () => {
      const state = reducer(initialState, changeCategory(1));

      expect(state.selectedCategory.name).toBe('한식');
    });
    it('change Category 양식', () => {
      const state = reducer(initialState, changeCategory(4));

      expect(state.selectedCategory.name).toBe('양식');
    });
  });
});
