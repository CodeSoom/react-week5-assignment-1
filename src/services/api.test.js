import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn(() => ({
      json: () => (data),
    }));
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchCategories', () => {
    it('fetch categories data', async () => {
      mockFetch([{ id: 1, name: '한식' }]);

      const categories = await fetchCategories();

      expect(categories).toEqual([{ id: 1, name: '한식' }]);
    });
  });

  describe('fetchRegions', () => {
    it('fetch categories data', async () => {
      mockFetch([{ id: 1, name: '서울' }]);

      const regions = await fetchRegions();

      expect(regions).toEqual([{ id: 1, name: '서울' }]);
    });
  });

  describe('fetchRestaurants', () => {
    it('fetch restaurants data', async () => {
      mockFetch([{ id: 1, name: '마법사주방' }]);

      const restaurants = await fetchRestaurants({ categoryId: 1, regionName: '서울' });

      expect(restaurants).toEqual([{ id: 1, name: '마법사주방' }]);
    });
  });
});
