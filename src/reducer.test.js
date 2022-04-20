import given from 'given2';

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

describe('reducer', () => {
  given('initialState', () => ({
    locations: given.locations,
    categories: [],
    restaurants: [],
    locationName: '',
    categoryId: '',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('setLocations', () => {
    it('changes the locations array', () => {
      given('locations', () => []);

      const state = reducer(given.initialState, setLocations(locations));

      expect(state.locations).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes the categories array', () => {
      given('locations', () => []);

      const state = reducer(given.initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes the restaurants array', () => {
      given('locations', () => []);

      const state = reducer(given.initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectLocations', () => {
    it('selects location', () => {
      given('locations', () => locations);

      const state = reducer(given.initialState, selectLocation({ id: 1 }));

      expect(state.locationName).toBe('서울');
    });
  });

  describe('selectCategory', () => {
    it('selects category', () => {
      given('locations', () => []);

      const state = reducer(given.initialState, selectCategory({ id: 1 }));

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
