import RestaurantSearchQueryReducer from './RestaurantSearchQueryReducer';

import {
  selectRegion,
  selectCategory,
} from '../actions';

describe('reducer', () => {
  describe('selectRegion', () => {
    it('changes selected region name', () => {
      const state = RestaurantSearchQueryReducer({
        regionName: '',
      }, selectRegion('서울'));

      expect(state.restaurantSearchQuery.regionName).toBe('서울');
    });
  });

  describe('selectCategory', () => {
    it('changes selected category id', () => {
      const state = RestaurantSearchQueryReducer({
        categoryId: null,
      }, selectCategory(4));

      expect(state.restaurantSearchQuery.categoryId).toBe(4);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      regionName: null,
      categoryId: null,
    };

    expect(RestaurantSearchQueryReducer()).toEqual(initialState);
  });
});
