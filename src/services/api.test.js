import { regions } from '../../fixtures/regions';
import { categories } from '../../fixtures/categories';
import { restaurants } from '../../fixtures/restaurants';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

describe('api', () => {
  function mockFetch(jsonData) {
    global.fetch = jest.fn(async () => ({
      json: async () => ({
        data: jsonData,
      }),
    }));
  }

  describe('fetchRegions', () => {
    it('loads regions', async () => {
      mockFetch(regions);
      const { data } = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    it('loads categories', async () => {
      mockFetch(categories);
      const { data } = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    it('loads restaurants', async () => {
      mockFetch(restaurants);
      const { data } = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).toEqual(restaurants);
    });
  });
});
