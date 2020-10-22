import reducer from './reducer';

import {
  setRegions,
  setCategories,
  updateLoading,
  selectRegion,
} from './actions';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('updateLoading', () => {
    it('changes loading', () => {
      const state = reducer({
        loading: false,
      }, updateLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region name', () => {
      const state = reducer({
        restaurantSearchQuery: {
          regionName: '',
        },
      }, selectRegion('서울'));

      expect(state.restaurantSearchQuery.regionName).toBe('서울');
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurantSearchQuery: {
        regionName: null,
        categoryId: null,
      },
      loading: false,
    };

    expect(reducer()).toEqual(initialState);
  });
});
