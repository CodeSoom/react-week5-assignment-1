import reducer from './reducer';

import {
  setCategories,
  setLocations,
  setRestaurants,
} from './actions';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

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

      expect(state.locations).toBe([]);
      expect(state.categories).toBe([]);
      expect(state.restaurants).toBe([]);
    });
  });
});
