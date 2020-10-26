import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

const mockFetch = (data) => {
  global.fetch = jest.fn().mockResolvedValue(
    Promise.resolve({
      json: () => Promise.resolve(data),
    }),
  );
};

describe('api', () => {
  test('fetchRegions', async () => {
    mockFetch(regions);

    expect(await fetchRegions()).toEqual(regions);
  });

  test('fetchCategories', async () => {
    mockFetch(categories);

    expect(await fetchCategories()).toEqual(categories);
  });

  test('fetchRestaurants', async () => {
    mockFetch(restaurants);

    expect(await fetchRestaurants()).toEqual(restaurants);
  });
});
