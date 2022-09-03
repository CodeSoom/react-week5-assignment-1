import {
  fetchCategories,
} from './api';

import { categories, regions } from '../../__fixtures__/data';

describe('api', () => {
  function mockFetch(data) {
    global.fetch = jest.fn(async () => ({
      json: async () => data,
    }));
  }

  describe('fetchRegions', () => {
    it('fetch region', async () => {
      mockFetch(regions);

      const result = await fetchRegions();

      expect(regions).toStrictEqual(result);
      expect(fetch).toBeCalledTimes(1);
    });
  });

  describe('fetchCategories', () => {
    it('fetch categories', async () => {
      mockFetch(categories);

      const result = await fetchCategories();

      expect(categories).toStrictEqual(result);
      expect(fetch).toBeCalledTimes(1);
    });
  });
});
