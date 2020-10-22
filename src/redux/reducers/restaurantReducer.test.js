import restaurantReducer from './restaurantReducer';

import {
  setRestaurants,
  updateRestaurantsLoading,
} from '../actions';

describe('regionReducer', () => {
  describe('updateRegionsLoading', () => {
    describe('setRegions', () => {
      it('changes regions', () => {
        const state = restaurantReducer({
          regions: [],
        }, setRestaurants(restaurants));

        expect(state.regions).not.toHaveLength(0);
      });
    });

    it('changes Regions loading state', () => {
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
