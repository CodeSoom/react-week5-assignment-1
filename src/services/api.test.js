import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchRegions', () => {
    it('returns regions', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return regions;
        },
      });

      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    it('returns categories', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return categories;
        },
      });

      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    it('returns restaurants', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() {
          return restaurants;
        },
      });

      const data = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).toEqual(restaurants);
    });
  });
});
