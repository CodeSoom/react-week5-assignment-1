import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('services', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchRegions', () => {
    beforeEach(() => {
      fetch.mockResolvedValue({
        json: () => REGIONS,
      });
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(fetch).toBeCalled();
      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      fetch.mockResolvedValue({
        json: () => CATEGORIES,
      });
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(fetch).toBeCalled();
      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      fetch.mockResolvedValue({
        json: () => RESTAURANTS,
      });
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants(REGIONS[0].name, CATEGORIES[0].id);

      expect(fetch).toBeCalled();
      expect(restaurants).toEqual(RESTAURANTS);
    });
  });
});
