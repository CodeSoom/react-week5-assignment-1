import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

describe('api', () => {
  const mockFetch = (data) => jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  describe('fetchRegions', () => {
    beforeAll(() => {
      global.fetch = mockFetch(regions);
    });

    it('returns regions', async () => {
      const result = await fetchRegions();

      expect(result).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeAll(() => {
      global.fetch = mockFetch(categories);
    });

    it('returns categories', async () => {
      const result = await fetchCategories();

      expect(result).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    beforeAll(() => {
      global.fetch = mockFetch(restaurants);
    });

    it('returns restaurants', async () => {
      const result = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

      expect(result).toEqual(restaurants);
    });
  });
});
