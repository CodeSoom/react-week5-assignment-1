import {
  selectCategory,
  selectRegion,
  loadRestaurants,
  setCategories,
  setRegions,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('selectCategory', () => {
    it('changes select category', () => {
      const initialState = {
        categoryId: 0,
      };

      const state = reducer(initialState, selectCategory({ id: 1 }));

      expect(state.categoryId).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes select region', () => {
      const initialState = {
        regionName: '',
      };

      const state = reducer(initialState, selectRegion({ name: '서울' }));

      expect(state.regionName).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('loadRestaurants', () => {
    it('load restaurants', () => {
      const initialState = {
        restaurants: [],
        categoryId: 1,
        regionName: '서울',
      };

      const categoryId = 1;

      const regionName = '서울';

      const state = reducer(initialState, loadRestaurants(categoryId, regionName));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  context('Unhandled action type', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, { type: 'Unhandled action' });

      expect(state).toBe(state);
    });
  });
});
