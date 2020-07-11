import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

describe('api', () => {
  const fetch = jest.fn();
  const mockFetch = (data) => {
    global.fetch = fetch.mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('regions fetch event', () => {
    it('return regions list', async () => {
      const regions = [
        {
          id: 1,
          name: '서울',
        },
      ];

      await mockFetch(regions);
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('categories fetch event', () => {
    it('return categories list', async () => {
      const categories = [
        {
          id: 1,
          name: '한식',
        },
      ];

      await mockFetch(categories);
      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('restaurants fetch event', () => {
    it('return restaurants list', async () => {
      const restaurants = [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구',
          information: '양천주가 in 서울 강남구',
        },
      ];

      await mockFetch(restaurants);
      const data = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).toEqual(restaurants);
    });
  });
});
