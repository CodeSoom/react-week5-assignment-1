import restaurantReducer from './restaurantReducer';

import restaurants from '../../fixtures/restaurants';

import {
  setRestaurants,
  updateRestaurantsLoading,
} from '../actions';

describe('regionReducer', () => {
  describe('updateRegionsLoading', () => {
    describe('setRestaurants', () => {
      it('changes restaurants', () => {
        const state = restaurantReducer({
          restaurants: [],
        }, setRestaurants(restaurants));

        expect(state.restaurants).not.toHaveLength(0);
      });
    });

    it('changes loading state of restaurants', () => {
      const state = restaurantReducer({
        loading: false,
      }, updateRestaurantsLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      restaurants: [],
      loading: false,
    };

    expect(restaurantReducer()).toEqual(initialState);
  });
});
