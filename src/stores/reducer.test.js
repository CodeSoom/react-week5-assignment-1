import reducer from './reducer';
import {
  setCategories, setCurrentCategoryId,
  updateRestaurantProperty, addRestaurant,
} from './action/action-creators';

import CATEGORIES from '../__fixtures__/categories.json';
import RESTAURANTS from '../__fixtures__/restaurants.json';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('uses initial state', () => {
      const previousState = undefined;
      const nextState = reducer(previousState, { type: 'some-action-type' });
      expect(nextState).not.toBeUndefined();
    });
  });

  context('when action-type is invalid', () => {
    it('do nothing', () => {
      const previousState = {
        someStatePropperty: Math.random() * 10,
      };
      const nextState = reducer(previousState, { type: 'some-invalid-action-type' });
      expect(previousState).toEqual(nextState);
    });
  });

  describe('setCategories', () => {
    // Given
    const previousState = {
      categories: [],
    };
    const categories = CATEGORIES;

    it('change categories', () => {
      // When
      const nextState = reducer(previousState, setCategories(categories));
      // Then
      expect(nextState.categories.length).toEqual(categories.length);
    });
  });

  describe('setCategoryId', () => {
    // Given
    const previousState = {
      categories: CATEGORIES,
      categoryId: null,
    };
    const category = CATEGORIES[0];

    it('change current-category-id', () => {
      // When
      const nextState = reducer(previousState, setCurrentCategoryId(category.id));
      // Then
      expect(nextState.categoryId).toEqual(category.id);
    });
  });

  describe('updateRestaurantProperty', () => {
    // Given
    const previousState = undefined;
    const restaurant = {
      name: '레스토랑 이름',
      category: '레스토랑 카테고리',
      address: '레스토랑 주소',
    };

    it('updates restaurant property', () => {
      Object.entries(restaurant).forEach(([name, value]) => {
        const state = reducer(previousState, updateRestaurantProperty(name, value));
        expect(state.restaurant[name]).toBe(value);
      });
    });
  });

  describe('addRestaurant', () => {
    context('with restaurant', () => {
      it('appends a new-restaurant into restaurants', () => {
        const previousState = {
          restaurants: [],
          restaurant: {
            name: '레스토랑 이름',
            category: '레스토랑 카테고리',
            address: '레스토랑 주소',
          },
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toHaveLength(1);
        expect(nextState.restaurants[0]).toEqual(previousState.restaurant);
      });
    });

    context('with empty-restaurant-properties', () => {
      it('does not work', () => {
        const previousState = {
          restaurants: RESTAURANTS,
          restaurant: {
            name: '',
            category: '',
            address: '',
          },
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toEqual(previousState.restaurants);
      });
    });

    context('without restaurant', () => {
      it('does not work', () => {
        const previousState = {
          restaurants: RESTAURANTS,
          restaurant: undefined,
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toEqual(previousState.restaurants);
      });
    });
  });
});
