import { fetchInitRegions, fetchInitCategories } from './api';

import { regions, categories } from '../../__fixture__/data';

function mockfetch(data) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });
}

describe('api', () => {
  describe('fetchInitRegions', () => {
    it('fetch initRegions', async () => {
      mockfetch(regions);

      const rate = await fetchInitRegions();

      expect(rate).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe('fetchInitCategories', () => {
    it('fetch initCategories', async () => {
      mockfetch(categories);

      const rate = await fetchInitCategories();

      expect(rate).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
