import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import { regions } from '../../fixtures/regions';
import { categories } from '../../fixtures/categories';
import { restaurants } from '../../fixtures/restaurants';

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
    it('지역 목록을 반환한다', async () => {
      await mockFetch(regions);
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories 테스트', () => {
    it('카테고리 목록을 반환한다', async () => {
      await mockFetch(categories);
      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants 테스트', () => {
    it('레스토랑 목록을 반환한다', async () => {
      await mockFetch(restaurants);
      const data = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).toEqual(restaurants);
    });
  });
});
