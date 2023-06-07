import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

import { regions, categories, restaurants } from '../../fixtures/data';

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    const regionUrl = 'https://eatgo-customer-api.ahastudio.com/regions';

    it('지역 url을 가져온다', async () => {
      await fetchRegions();

      expect(fetch).toHaveBeenCalledWith(regionUrl);
    });

    it('지역 목록을 가져온다', async () => {
      const regionsResult = await fetchRegions();

      expect(regionsResult).toEqual({ regions });
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    });

    const categoriesUrl = 'https://eatgo-customer-api.ahastudio.com/categories';

    it('카테고리 url을 가져온다', async () => {
      await fetchCategories();

      expect(fetch).toHaveBeenCalledWith(categoriesUrl);
    });

    it('카테고리 목록을 가져온다', async () => {
      const categoriesResult = await fetchCategories();

      expect(categoriesResult).toEqual({ categories });
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(restaurants),
      }));
    });

    const region = regions[0];
    const category = categories[0];

    const restaurantsUrl = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region.name}&category=${category.id}`;

    it('레스토랑 url을 가져온다', async () => {
      await fetchRestaurants(region.name, category.id);

      expect(fetch).toHaveBeenCalledWith(restaurantsUrl);
    });

    it('레스토랑 목록을 가져온다', async () => {
      const restaurantsResult = await fetchRestaurants({ region, category });

      expect(restaurantsResult).toEqual({ restaurants });
    });
  });
});
