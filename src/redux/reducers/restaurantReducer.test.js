import restaurantReducer from './restaurantReducer';

import {
  updateRestaurantsLoading,
} from '../actions';

describe('regionReducer', () => {
  describe('updateRegionsLoading', () => {
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
