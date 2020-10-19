import reducer from './reducer';

import regions from '../__fixtures__/regions';

describe('reducer', () => {
  describe('setRestaurantRegions', () => {
    it('changes restaurantRegions', () => {
      const initialRestautrantRegions = [];

      const state = reducer({
        restaurantRegions: initialRestautrantRegions,
      }, {
        type: 'setRestaurantRegions',
        payload: { restaurantRegions: regions },
      });

      expect(state.restaurantRegions).toHaveLength(regions.length);
    });
  });
});
