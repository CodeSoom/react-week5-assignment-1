import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

describe('api', () => {
  describe('fetchRegions', () => {
    it('returns regions', async () => {
      // Given
      global.fetch = await jest.fn().mockResolvedValue({
        async json() {
          return REGIONS;
        },
      });

      // When
      const regions = await fetchRegions();

      // Then
      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    it('returns categories', async () => {
      // Given
      global.fetch = await jest.fn().mockResolvedValue({
        async json() {
          return CATEGORIES;
        },
      });

      // When
      const categories = await fetchCategories();

      // Then
      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    it('returns restaurants', async () => {
      // Given
      global.fetch = await jest.fn().mockResolvedValue({
        async json() {
          return RESTAURANTS;
        },
      });

      // When
      const restaurants = await fetchRestaurants();

      // Then
      expect(restaurants).toEqual(RESTAURANTS);
    });
  });
});
