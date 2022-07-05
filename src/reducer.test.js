import { getRestaurantRegions } from './actions';

import { restaurantRegions } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        restaurantRegions: [],
      });
    });
  });

  context('state가 있는경우', () => {
    describe('getRestaurantRegions', () => {
      const state = reducer({ restaurantRegions: [] }, getRestaurantRegions(restaurantRegions));

      expect(state.restaurantRegions).toBe(restaurantRegions);
    });
  });
});
