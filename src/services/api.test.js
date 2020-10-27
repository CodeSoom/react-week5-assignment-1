import { fetchOptions, fetchRestaurants } from './api';

import { restaurants, regions, categories } from '../../fixtures/fixtures';

describe('api', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    global.fetch.mockClear();
  });

  function mockFetch({ data }) {
    global.fetch.mockResolvedValue({
      json: () => (data),
    });
  }

  describe('fetchRegion', () => {
    mockFetch({ data: regions });

    it('get regions from server', async () => {
      const datas = await fetchOptions({ optionName: 'regions' });
      expect(datas.length).toBeGreaterThan(1);
    });
  });

  describe('fetchCategories', () => {
    it('get categories from server', async () => {
      mockFetch({ data: categories });

      const datas = await fetchOptions({ optionName: 'categories' });
      expect(datas.length).toBeGreaterThan(1);
    });
  });

  describe('fetchRestaurants', () => {
    it('get categories from server', async () => {
      mockFetch({ data: restaurants });

      const datas = await fetchRestaurants({ region: '서울', categoryId: 1 });
      expect(datas.length).toBeGreaterThan(1);
    });
  });
});
