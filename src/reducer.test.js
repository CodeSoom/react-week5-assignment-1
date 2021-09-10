import reducer from './reducer';

import {
  setCategories,
  setRegions,
} from './actions';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const initailState = {
        categories: [],
      };

      const state = reducer(initailState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('changes Regions', () => {
      const initailState = {
        regions: [],
      };

      const state = reducer(initailState, setRegions(regions));

      expect(state.regions).toHaveLength(2);
    });
  });
});
