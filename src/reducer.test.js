import reducer from './reducer';

import {
  setCategories,
  setRegions,
} from './actions';

import { categories } from '../__fixtures__/categories';
import { regions } from '../__fixtures__/regions';

describe('redcuer', () => {
  const previousState = {
    categories: [],
    regions: [],
  };

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  describe('set Regions', () => {
    it('changes regions', () => {
      const state = reducer(previousState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });
});
