import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
} from './actions';

describe('reducer', () => {
  describe('default state', () => {
    it('returns initialState', () => {
      const state = reducer();

      const { regions } = state;

      expect(regions).toHaveLength(0);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '라이브볼' },
      ];

      const state = reducer({
        restaurants: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const state = reducer({
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      }, selectRegion({ id: 1, name: '서울' }));

      expect(state.selectedRegion.name).toBe('서울');
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const state = reducer({
        selectedCategory: null,
      }, selectCategory({ id: 1, name: '한식' }));

      expect(state.selectedCategory.name).toBe('한식');
    });
  });
});
