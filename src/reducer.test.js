import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  setCategories,
} from './actions';

import categories from '../fixtures/categories';
import { regions } from '../fixtures/regions';

describe('reducer', () => {
  describe('Regions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });

    it('select Region', () => {
      const regionId = 1;
      const initialState = {
        regions,
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(regionId));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
