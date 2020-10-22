import reducer from './reducer';

import {
  selectCategory,
  selectRegion,
  setRegions,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('selectRegion', () => {
    it('change selected Region', () => {
      const state = reducer({
        selectedRegion: 2,
      }, selectRegion(1));

      expect(state.selectedRegion).toBe(1);
    });
  });

  describe('setRegions', () => {
    it('set initial value of regions', () => {
      const state = reducer(undefined, setRegions(regions));
      expect(state.regions).toBe(regions);
    });
  });

  describe('selectCategory', () => {
    it('change selected Category', () => {
      const state = reducer({
        selectedCategory: 2,
      }, selectCategory(1));

      expect(state.selectedCategory).toBe(1);
    });
  });
});
