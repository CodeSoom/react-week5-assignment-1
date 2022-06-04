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
  describe('changeRestaurantField', () => {
    it('shows clicked region', () => {
      const initialState = {
        restaurant: {
          categoryId: '',
          region: '',
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

    it('shows clicked categoryId', () => {
      const initialState = {
        restaurant: {
          categoryId: 0,
          region: '',
        },
      };

      const state = reducer(
        initialState,
        changeRestaurantField({
          name: 'categoryId',
          value: 1,
        })
      );

      expect(state.restaurant.categoryId).toBe(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
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
