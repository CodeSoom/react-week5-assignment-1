/* eslint-disable comma-dangle */
import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  setCategories,
  setRegions,
} from '../actions';

import restaurants from '../../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('shows clicked address and region', () => {
      const initialState = {
        restaurant: {
          category: '분류',
          region: '주소',
        },
      };

      const state = reducer(
        initialState,
        changeRestaurantField({
          name: 'region',
          value: '서울시 강남구',
        })
      );

      expect(state.restaurant.region).toBe('서울시 강남구');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [{ id: 1, name: '한식' }];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [{ id: 1, name: '서울' }];

      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
});
