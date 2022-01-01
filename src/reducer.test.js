// reducer: action과 reducer받아와서 테스트
import reducer from './reducer';

import restaurants from '../fixtures/fixture';

import {
  setRestaurants,
  addRestaurant,
  putInputField,
  loadCategories,
} from './action';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('updates restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurants and clears input field and updates newId', () => {
      const initialState = {
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '이름',
          category: '분류',
          place: '주소',
        },
      };

      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).toBe(100);
      expect(state.restaurant.name).toBe('');
      expect(state.newId).toBe(101);
    });
  });

  describe('putInputField', () => {
    it('changes value of input field', () => {
      const initialState = {
        restaurants: [],
        restaurant: {
          name: '초기값',
          category: '초기값2',
          place: '초기값3',
        },
      };

      const state = reducer(initialState, putInputField({
        name: 'name',
        value: '왈랄라',
      }));

      expect(state.restaurant.name).toBe('왈랄라');
    });
  });

  describe('loadCategories', () => {
    it('updates categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, loadCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
