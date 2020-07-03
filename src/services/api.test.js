import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import { regions, categories, restaurants } from '../../__fixture__/data';

describe('api', () => {
  const fetch = jest.fn();
  const mockFetch = (data) => {
    global.fetch = fetch.mockResolvedValue({
      async json() {
        return data;
      },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      fetch.mockClear();
      mockFetch(regions);
    });

    it('returns regions', async () => {
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchInitCategories', () => {
    beforeEach(() => {
      fetch.mockClear();
      mockFetch(categories);
    });

    it('fetch initCategories', async () => {
      const data = await fetchCategories();

      expect(data).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      fetch.mockClear();
      mockFetch(restaurants);
    });

    it('fetch Restaurants', async () => {
      const data = await fetchRestaurants('서울', 1);

      expect(data).toEqual(restaurants);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
