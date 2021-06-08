import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch({
        regions: [
          { d: 1, name: '서울' },
        ],
      });
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual({
        regions: [
          { d: 1, name: '서울' },
        ],
      });
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch({
        categories: [
          { d: 1, name: '한식' },
        ],
      });
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual({
        categories: [
          { d: 1, name: '한식' },
        ],
      });
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch({
        restaurants: [
          {
            id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
          },
        ],
      });
    });

    it('returns restaurantss', async () => {
      const restaurants = await fetchRestaurants();

      expect(restaurants).toEqual({
        restaurants: [
          {
            id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
          },
        ],
      });
    });
  });
});
