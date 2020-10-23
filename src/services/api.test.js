import { fetchOptions, fetchRestaurants } from './api';

import { restaurants, regions, categories } from '../../fixtures/fixtures';

describe('api', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    global.fetch.mockClear();
  });

  describe('fetchRegion', () => {
    global.fetch.mockResolvedValue({
      json: () => (regions),
    });

    it('get regions from server', async () => {
      const datas = await fetchOptions({ optionName: 'regions' });
      expect(datas.length).toBeGreaterThan(1);
    });
  });

  describe('fetchCategories', () => {
    global.fetch.mockResolvedValue({
      json: () => (categories),
    });

    it('get categories from server', async () => {
      const datas = await fetchOptions({ optionName: 'categories' });
      expect(datas.length).toBeGreaterThan(1);
    });
  });

  describe('fetchRestaurants', () => {
    global.fetch.mockResolvedValue({
      json: () => (restaurants),
    });

    it('get categories from server', async () => {
      const datas = await fetchRestaurants({ region: '서울', categoryId: 1 });
      expect(datas.length).toBeGreaterThan(1);
    });
  });
});
