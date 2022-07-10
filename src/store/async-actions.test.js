import given from 'given2';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './async-actions';

import {
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

jest.mock('../services/api');

describe('async-actions', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    getState.mockClear();
  });

  describe('loadRegions', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(REGIONS);
    });

    it('dispatch setRegions', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(REGIONS));
    });
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      fetchCategories.mockResolvedValue(CATEGORIES);
    });

    it('dispatch setCategories', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(CATEGORIES));
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      fetchRestaurants.mockResolvedValue(RESTAURANTS);

      getState.mockImplementation(() => ({
        selectedRegionId: given.selectedRegionId,
        selectedCategoryId: given.selectedCategoryId,
      }));
    });

    context('with selectedRegionId and selectedCategoryId', () => {
      given('selectedRegionId', () => REGIONS[0].id);
      given('selectedCategoryId', () => CATEGORIES[0].id);

      it('dispatch setCategories', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith(setRestaurants(RESTAURANTS));
      });
    });
  });
});
