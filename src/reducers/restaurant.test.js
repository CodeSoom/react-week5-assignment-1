import reducer from './restaurant';

import { restaurants } from '../../fixtures';

import {
  setRestaurants,
} from '../actions';

describe('restaurant reducer', () => {
  context('setRestaurants', () => {
    it('chage restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = {
        restaurant: reducer(initialState, setRestaurants(restaurants)),
      };

      expect(state.restaurant.restaurants).not.toHaveLength(0);
    });
  });

  context('undefined action', () => {
    it("doesn't work", () => {
      const state = {
        restaurant: reducer(),
      };

      expect(state.restaurant.restaurants).toHaveLength(0);
    });
  });
});
