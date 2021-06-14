import reducer, { initialState } from './reducer';

import {
  setRestaurants, addRestaurant, updateRestaurantInput, setCategories,
} from './actions';
import restaurants from '../fixtures/restaurants';
import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restarants array', () => {
      const state = reducer(initialState, setRestaurants(restaurants));
      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  context('updateRestaurantInputs', () => {
    it("updates Restaurant's Name", () => {
      const state = reducer(
        initialState,
        updateRestaurantInput('name', '가게명'),
      );
      expect(state.restaurantName).toBe('가게명');
    });

    it("updates Restaurant's Category", () => {
      const state = reducer(
        initialState,
        updateRestaurantInput('category', '분류'),
      );
      expect(state.restaurantCategory).toBe('분류');
    });

    it("updates Restaurant's Address", () => {
      const state = reducer(
        initialState,
        updateRestaurantInput('address', '주소'),
      );
      expect(state.restaurantAddress).toBe('주소');
    });
  });

  context('when inputs is not empty ', () => {
    const inputsState = {
      restaurantName: '마녀주방',
      restaurantCategory: '한식',
      restaurantAddress: '서울시 강남구',
      restaurants: [],
    };

    describe('addRestaurant', () => {
      it('adds restaurant info to restarants array', () => {
        const state = reducer(inputsState, addRestaurant());

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurantName).toBe('');
        expect(state.restaurantCategory).toBe('');
        expect(state.restaurantAddress).toBe('');
      });
    });
  });

  context('when inputs had any empty ', () => {
    const inputsState = {
      restaurantName: '',
      restaurantCategory: '한식',
      restaurantAddress: '서울시 강남구',
      restaurants: [],
    };
    describe('addRestaurant', () => {
      it('Dose noting', () => {
        const state = reducer(inputsState, addRestaurant());

        expect(state.restaurants).toHaveLength(0);
        expect(state.restaurantName).toBe('');
        expect(state.restaurantCategory).toBe('한식');
        expect(state.restaurantAddress).toBe('서울시 강남구');
      });
    });
  });

  context('undefined action type', () => {
    it('returns previousState', () => {
      const previousState = {
        restaurantName: '',
        restaurantCategory: '한식',
        restaurantAddress: '서울시 강남구',
        restaurants: [],
      };
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(previousState, undefinedAction);

      expect(state === previousState);
    });
  });

  context('when previousState is undefined', () => {
    it('returns initialState', () => {
      const undefinedAction = {
        type: 'no ation',
      };
      const state = reducer(undefined, undefinedAction);
      expect(state === initialState);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(1);
    });
  });
});
