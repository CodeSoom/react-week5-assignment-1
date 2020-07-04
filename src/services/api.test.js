import {
  fetchRegions, fetchCategories, fetchRestaurants,
} from './api';

import {
  regions, categories, restaurants,
} from '../../fixture/test-data';

describe('api', () => {
  describe('fetchRegions', () => {
    it('returns regions', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return regions;
        },
      });

      const fetched = await fetchRegions();

      expect(fetched).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    it('returns categories', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return categories;
        },
      });

      const fetched = await fetchCategories();

      expect(fetched).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    it('returns restaurants', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return restaurants;
        },
      });

      const fetched = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(fetched).toEqual(restaurants);
    });
  });
});
