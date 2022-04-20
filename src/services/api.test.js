import given from 'given2';
import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('api', () => {
  given('regions', () => []);
  given('categories', () => []);
  given('restaurants', () => []);

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      regions: given.regions,
      categories: given.categories,
      restaurants: given.restaurants,
    }),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchRegions', () => {
    it('fetches Regions', async () => {
      given('regions', () => regions);

      const response = await fetchRegions();

      expect(response.regions[0].name).toBe('서울');
      expect(response.regions).toHaveLength(2);
      expect(global.fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
    });
  });

  describe('fetchCategories', () => {
    it('fetches categories', async () => {
      given('categories', () => categories);
      const response = await fetchCategories();

      expect(response.categories[0].name).toBe('한식');
      expect(response.categories).toHaveLength(2);
      expect(global.fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/categories');
    });
  });

  describe('fetchRestaurants', () => {
    it('fetches restaurants', async () => {
      given('restaurants', () => restaurants);

      const regionName = 'hello';
      const categoryId = 3;
      const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
      const response = await fetchRestaurants({ regionName, categoryId });

      expect(response.restaurants[0].name).toBe('두향');
      expect(response.restaurants).toHaveLength(2);
      expect(global.fetch).toBeCalledWith(url);
    });
  });
});
