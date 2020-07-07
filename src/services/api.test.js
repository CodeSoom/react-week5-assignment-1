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

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(regions);
    });

    it('returns regions', async () => {
      const data = await fetchRegions();

      expect(data).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(categories);
    });

    it('returns categories', async () => {
      const data = await fetchCategories();

      expect(data).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(restaurants);
    });

    it('returns restaurants', async () => {
      const data = await fetchRestaurants('서울', 1);

      expect(data).toEqual(restaurants);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
