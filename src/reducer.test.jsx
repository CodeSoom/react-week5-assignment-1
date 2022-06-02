/* eslint-disable comma-dangle */
import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
  setCategories,
  setRegions,
} from './actions';

import restaurants from '../fixtures/restaurants';

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
    it('changes restaurants form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(
        initialState,
        changeRestaurantField({
          name: 'name',
          value: '서울시 강남구',
        })
      );

      expect(state.restaurant.name).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);

      const restaurant = state.restaurants[state.restaurants.length - 1];
      expect(restaurant.id).toBe(101);
      expect(restaurant.name).toBe('마법사주방');

      expect(state.restaurant.name).toBe('');

      expect(state.newId).toBe(102);
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
