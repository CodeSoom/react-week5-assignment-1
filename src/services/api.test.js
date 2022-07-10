import {
  fetchCategories, fetchRegions, fetchRestaurants,
} from './api';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('api', () => {
  const fetch = jest.fn();

  const mockFetch = (data) => {
    global.fetch = fetch.mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regions);
    });

    it('지역 목록을 반환합니다.', async () => {
      const result = await fetchRegions();

      expect(result).toBe(regions);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categories);
    });

    it('카테고리 목록을 반환합니다.', async () => {
      const result = await fetchCategories();

      expect(result).toBe(categories);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurants);
    });

    it('레스토랑 목록을 반환합니다.', async () => {
      const result = await fetchRestaurants({ region: '서울', categoryId: 1 });

      expect(result).toEqual(restaurants);
    });
  });
});
