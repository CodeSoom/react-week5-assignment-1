import { fetchRegions, fetchCategories, fetchRestaurant } from './api';

describe('api', () => {
  const regionUrl = 'https://eatgo-customer-api.ahastudio.com/regions';
  const categoriesUrl = 'https://eatgo-customer-api.ahastudio.com/categories';
  const restaurantuUrl = 'https://eatgo-customer-api.ahastudio.com/restaurants?region=1&category=1';

  global.fetch = jest.fn().mockResolvedValue({
    async json() {
      return true;
    },
  });

  describe('fetchRegions', () => {
    it('returns regions', async () => {
      const result = await fetchRegions();
      expect(result).toBe(true);
      expect(global.fetch).toBeCalledWith(regionUrl);
    });
  });

  describe('fetchCategories', () => {
    it('returns regions', async () => {
      const result = await fetchCategories();
      expect(result).toBe(true);
      expect(global.fetch).toBeCalledWith(categoriesUrl);
    });
  });

  describe('fetchRestaurant', () => {
    it('returns regions', async () => {
      const result = await fetchRestaurant(1, 1);
      expect(result).toBe(true);
      expect(global.fetch).toBeCalledWith(restaurantuUrl);
    });
  });
});
