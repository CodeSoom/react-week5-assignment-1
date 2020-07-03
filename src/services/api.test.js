import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import regionsFixture from '../__fixtures__/regions';
import categoriesFixture from '../__fixtures__/categories';
import restaurantsFixture from '../__fixtures__/restaurants';

function mockFetch(data) {
  global.fetch = jest.fn().mockResolvedValue({
    async json() {
      return data;
    },
  });
}

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regionsFixture);
    });

    it('fetch regions', async () => {
      // when
      const regions = await fetchRegions();
      // then
      expect(regions).toEqual(regionsFixture);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categoriesFixture);
    });

    it('fetch categories', async () => {
      // when
      const categories = await fetchCategories();
      // then
      expect(categories).toEqual(categoriesFixture);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurantsFixture);
    });

    it('fetch restaurants by region and category', async () => {
      // when
      const restaurants = await fetchRestaurants(regionsFixture[0], categoriesFixture[0]);
      // then
      expect(restaurants).toEqual(restaurantsFixture);
    });
  });
});
