import reducer, { initialState } from './reducer';

import {
  setRegions, setCategories, setCurrentRegionId, setCurrentCategoryId,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import emptyState from '../fixtures/emptyState';

describe('reducer', () => {
  context('without parameter', () => {
    it('returns the initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });

  context('with undefined action type', () => {
    it('returns the initial state', () => {
      // const initialState = {
      //   newId: 100,
      //   restaurant: {
      //     name: '',
      //     address: '',
      //     category: '',
      //   },
      //   restaurants: [],
      // };
      const state = reducer(initialState, { type: 'unknown' });
      expect(state).toEqual(initialState);
    });
  });
  describe('setRegions', () => {
    it('set new regions into regions', () => {
      const state = reducer(emptyState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });
  describe('setCategories', () => {
    it('set new categories into categories', () => {
      const state = reducer(emptyState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });
  describe('setCurrentRegionId', () => {
    it('set new currentRegionId', () => {
      const state = reducer(emptyState, setCurrentRegionId('1'));

      expect(state.currentRegionId).toBe('1');
    });
  });
  describe('setCurrentCategoryId', () => {
    it('set new currentCategoryId', () => {
      const state = reducer(emptyState, setCurrentCategoryId('1'));

      expect(state.currentCategoryId).toBe('1');
    });
  });
});
