import categories from '../../fixtures/categories';
import regions from '../../fixtures/regions';
import restaurants from '../../fixtures/restaurants';

import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    const url = 'https://eatgo-customer-api.ahastudio.com/regions';

    it('fetches the regions url', async () => {
      await fetchRegions();

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('returns regions', async () => {
      const result = await fetchRegions();

      expect(result).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    });

    const url = 'https://eatgo-customer-api.ahastudio.com/categories';

    it('fetches the categories url', async () => {
      await fetchCategories();

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('returns categories', async () => {
      const result = await fetchCategories();

      expect(result).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(restaurants),
      }));
    });

    const region = regions[1];
    const category = categories[3];

    const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region.name}&category=${category.id}`;

    it('fetches the restaurants url', async () => {
      await fetchRestaurants(region, category);

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('returns restaurants', async () => {
      const result = await fetchRestaurants(region, category);

      expect(result).toEqual(restaurants);
    });
  });
});
