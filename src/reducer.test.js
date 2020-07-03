import reducer from './reducer';

import {
  setRegions, selectRegion,
  setCategories, selectCategory,
  setRestaurants,
} from './actions';

import {
  regions, categories, restaurants,
} from '../fixture/test-data';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  context('when reducer is executed first time', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, 'INITIAL_EXECUTION');

      expect(state.regions).toHaveLength(0);
      expect(state.categories).toHaveLength(0);
      expect(state.restaurants).toHaveLength(0);

      expect(state.regionName).toBeUndefined();
      expect(state.categoryId).toBeUndefined();
    });
  });

  context('with wrong action', () => {
    it('returns previous state', () => {
      const state = reducer(previousState, 'WRONG_ACTION');

      expect(state).toEqual(previousState);
    });
  });

  context('with setRegions action', () => {
    it('returns state with updated regions', () => {
      const state = reducer(previousState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  context('with selectRegion action', () => {
    it('returns state with selected region name', () => {
      const state = reducer(previousState, selectRegion('서울'));

      expect(state.regionName).toBe('서울');
    });
  });

  context('with setCategories action', () => {
    it('returns state with updated categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  context('with selectCategory action', () => {
    it('returns state with selected category id', () => {
      const state = reducer(previousState, selectCategory(1));

      expect(state.categoryId).toBe(1);
    });
  });

  context('with setRestaurants action', () => {
    it('returns state with updated restaurants', () => {
      const state = reducer(previousState, setRestaurants(restaurants));

      expect(state.restaurants).toEqual(restaurants);
    });
  });
});
