import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from '.';

import { regions } from '../../fixtures/regions';
import { categories } from '../../fixtures/categories';
import { restaurants } from '../../fixtures/restaurants';

jest.mock('../services/api');

describe('actions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  describe('loadRegions', () => {
    it('passes "setRegion" action', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('passes "setCategories" action', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(categories));
    });
  });

  describe('loadRestaurants', () => {
    it('passes "setRestaurants" action', async () => {
      await loadRestaurants({
        region: '서울',
        categoryId: '1',
      })(dispatch);

      expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
    });
  });
});
