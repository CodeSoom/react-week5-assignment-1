import { enableFetchMocks } from 'jest-fetch-mock';
import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../../__fixtures__/regions';
import categories from '../../__fixtures__/categories';
import restaurants from '../../__fixtures__/restaurants';

describe('api', () => {
  enableFetchMocks();

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('fetchRegions', () => {
    it('fetches regions data', async () => {
      fetch.mockResponse(JSON.stringify({ data: regions }));

      const response = await fetchRegions();
      expect(response.data).toEqual(regions);
    });
  });

  describe('fetchCategories', () => {
    it('fetches categories data', async () => {
      fetch.mockResponse(JSON.stringify({ data: categories }));

      const response = await fetchCategories();
      expect(response.data).toEqual(categories);
    });
  });

  describe('fetchRestaurants', () => {
    it('fetches restaurants data', async () => {
      const selectedRegion = '서울';
      const selectedCategory = 1;

      fetch.mockResponse(JSON.stringify({ data: restaurants }));

      const response = await fetchRestaurants({ selectedRegion, selectedCategory });
      expect(response.data).toEqual(restaurants);
    });
  });
});
