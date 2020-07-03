import { fetchRegions, fetchInitCategories, fetchRestaurants } from './api';

import { regions, categories, restaurants } from '../../__fixture__/data';

function onFetch(data) { // TODO : 삭제 예정
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => { // 삭제! : beforeEach는 들어가면 안됨!
    fetch.mockClear();
  });
}

describe('api', () => {
  const mockFetch = (data) => { // onFecth 간단한 버전
    global.fetch = jest.fn().mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regions);
    });

    it('returns regions', async () => {
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchInitCategories', () => {
    it('fetch initCategories', async () => {
      onFetch(categories);

      const rate = await fetchInitCategories();

      expect(rate).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe('fetchRestaurants', () => {
    it('fetch Restaurants', async () => {
      onFetch(restaurants);

      const rate = await fetchRestaurants('서울', 1);

      expect(rate).toEqual(restaurants);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
