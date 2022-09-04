import reducer from './reducer';

import {
  setRegions, selectRegion,
  setCategories, selectCategory,
  setRestaurants,
} from './actions';

import {
  regions,
  categories,
  restaurants,
} from '../__fixtures__/data';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
    selectedRegion: {
      id: undefined,
      name: undefined,
    },
    selectedCategory: {
      id: undefined,
      name: undefined,
    },
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('sets regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  describe('setCategories', () => {
    it('sets categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  describe('setRestaurants', () => {
    it('sets restaurants', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toEqual(restaurants);
    });
  });

  describe('selectRegion', () => {
    it('updates selectedRegion ', () => {
      const state = reducer(initialState, selectRegion(regions[0]));

      expect(state.selectedRegion.id).toBe(1);
      expect(state.selectedRegion.name).toBe('서울');
    });
  });

  describe('selectCategory', () => {
    it('updates selectedCategory', () => {
      const state = reducer(initialState, selectCategory(categories[0]));

      expect(state.selectedCategory.id).toBe(1);
      expect(state.selectedCategory.name).toBe('한식');
    });
  });
});
