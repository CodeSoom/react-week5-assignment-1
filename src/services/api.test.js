import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../__fixture__/regions';
import categories from '../__fixture__/categories';
import restaurants from '../__fixture__/restaurants';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchRegions', () => {
    fetch.mockResponseOnce(JSON.stringify(regions));

    it('returns regions', async () => {
      const data = await fetchRegions();

      expect(data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    fetch.mockResponseOnce(JSON.stringify(categories));

    it('returns categories', async () => {
      const data = await fetchCategories();

      expect(data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    context('with parameters', () => {
      fetch.mockResponseOnce(JSON.stringify(restaurants));

      it('returns restaurants', async () => {
        const data = await fetchRestaurants('서울', 1);

        expect(data).toEqual(restaurants);
      });
    });

    context('without parameters', () => {
      fetch.mockResponseOnce(JSON.stringify([]));

      it('returns empty array', async () => {
        const data = await fetchRestaurants();

        expect(data).toEqual([]);
      });
    });
  });
});
