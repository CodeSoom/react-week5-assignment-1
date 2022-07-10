import reducer, { initialState } from './reducer';

import {
  setRegions,
  selectRegion,
  setCategories,
  selectCategory,
  setRestaurants,
} from './actions';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('reducer', () => {
  context('without state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });

  context('with state', () => {
    describe('undefined action', () => {
      it('returns initialState', () => {
        const state = reducer(initialState, undefined);

        expect(state).toBe(initialState);
      });
    });

    describe('setRegions', () => {
      it('update regions', () => {
        const state = reducer(initialState, setRegions(REGIONS));

        expect(state.regions).toEqual(REGIONS);
      });
    });

    describe('selectRegion', () => {
      it('update region id', () => {
        const state = reducer(initialState, selectRegion(REGIONS[0].id));

        expect(state.selectedRegionId).toBe(REGIONS[0].id);
      });
    });

    describe('setCategories', () => {
      it('update categories', () => {
        const state = reducer(initialState, setCategories(CATEGORIES));

        expect(state.categories).toEqual(CATEGORIES);
      });
    });

    describe('selectCategory', () => {
      it('update category id', () => {
        const state = reducer(initialState, selectCategory(CATEGORIES[0].id));

        expect(state.selectedCategoryId).toBe(CATEGORIES[0].id);
      });
    });

    describe('setRestaurants', () => {
      it('update restaurants', () => {
        const state = reducer(initialState, setRestaurants(RESTAURANTS));

        expect(state.restaurants).toEqual(RESTAURANTS);
      });
    });
  });
});
