import reducer from './reducer';
import {
  setCategories, setSelectedCategoryId,
  setRegions, setSelectedRegionId,
} from './actions';

import CATEGORIES from './__fixtures__/categories.json';
import REGIONS from './__fixtures__/regions.json';
import RESTAURANTS from './__fixtures__/restaurants.json';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('uses initial state', () => {
      const previousState = undefined;
      const nextState = reducer(previousState, { type: 'some-action-type' });
      expect(nextState).not.toBeUndefined();
    });
  });

  context('when action-type is invalid', () => {
    it('do nothing', () => {
      const previousState = {
        someStatePropperty: Math.random() * 10,
      };
      const nextState = reducer(previousState, { type: 'some-invalid-action-type' });
      expect(previousState).toEqual(nextState);
    });
  });

  describe('setCategories', () => {
    // Given
    const previousState = {
      categories: [],
    };
    const categories = CATEGORIES;

    it('change categories', () => {
      // When
      const nextState = reducer(previousState, setCategories(categories));
      // Then
      expect(nextState.categories.length).toEqual(categories.length);
    });
  });

  describe('setCategoryId', () => {
    // Given
    const previousState = {
      categories: CATEGORIES,
      selectedCategoryId: null,
    };
    const category = CATEGORIES[0];

    it('change selected-category-id', () => {
      // When
      const nextState = reducer(previousState, setSelectedCategoryId(category.id));
      // Then
      expect(nextState.selectedCategoryId).toEqual(category.id);
    });
  });

  describe('setRegions', () => {
    // Given
    const previousState = {
      regions: [],
    };
    const regions = REGIONS;

    it('change regions', () => {
      // When
      const nextState = reducer(previousState, setRegions(regions));
      // Then
      expect(nextState.regions.length).toEqual(regions.length);
    });
  });

  describe('setSelectedRegionId', () => {
    // Given
    const previousState = {
      regions: REGIONS,
      selectedRegionId: null,
    };
    const regionId = REGIONS[0].id;

    it('change selected-category-id', () => {
      // When
      const nextState = reducer(previousState, setSelectedRegionId(regionId));
      // Then
      expect(nextState.selectedRegionId).toEqual(regionId);
    });
  });
});
