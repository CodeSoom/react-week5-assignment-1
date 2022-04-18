import reducer from './reducer';

import {
  setCategories,
  setLocations,
  setRestaurants,
  selectLocation,
  selectCategory,
} from './actions';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('reducer', () => {
  describe('setLocations', () => {
    it('changes the locations array', () => {
      const initialState = {
        locations: [],
      };

      const state = reducer(initialState, setLocations(locations));

      expect(state.locations).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes the categories array', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes the restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectLocations', () => {
    it('select location', () => {
      const initialState = {
        locationId: '',
      };

      const state = reducer(initialState, selectLocation({ id: 1 }));

      expect(state.locationId).toBe(1);
    });
  });

  describe('selectCategory', () => {
    it('select category', () => {
      const initialState = {
        categoryId: '',
      };

      const state = reducer(initialState, selectCategory({ id: 1 }));

      expect(state.categoryId).toBe(1);
    });
  });

  context('without actions', () => {
    const someFunction = jest.fn(() => ({
      type: 'someFunction',
      payload: {
        locations,
        categories,
        restaurants,
      },
    }));

    it('doesn\'t change initial state', () => {
      const state = reducer(undefined, someFunction());

      expect(state.locations).toEqual([]);
      expect(state.categories).toEqual([]);
      expect(state.restaurants).toEqual([]);
    });
  });
});
