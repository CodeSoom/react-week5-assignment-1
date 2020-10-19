import reducer from './reducer';

import restaurantRegions from '../__fixtures__/restaurantRegions';

describe('reducer', () => {
  describe('setRestaurantRegions', () => {
    it('changes restaurantRegions', () => {
      const initialRestautrantRegions = [];

      const state = reducer({
        restaurantRegions: initialRestautrantRegions,
      }, {
        type: 'setRestaurantRegions',
        payload: { restaurantRegions },
      });

      expect(state.restaurantRegions).toHaveLength(restaurantRegions.length);
    });
  });
});
