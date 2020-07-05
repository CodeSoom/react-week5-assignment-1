import { fetchRegions, fetchCategories } from './api';

import { regions } from '../../fixtures/regions';
import { categories } from '../../fixtures/categories';

describe('api', () => {
  const fetch = jest.fn();
  const mockFetch = (data) => {
    global.fetch = fetch.mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('fetchRegions 테스트', () => {
    it('returns regions', async () => {
      await mockFetch(regions);
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories 테스트', () => {
    it('returns regions', async () => {
      await mockFetch(categories);
      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });
});
