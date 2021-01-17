import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

describe('api', () => {
  function mockFetch(data) {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(data),
    }));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetchRegions', async () => {
    mockFetch(regions);
    const data = await fetchRegions();

    expect(data).toEqual(regions);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetchCategories', async () => {
    mockFetch(categories);
    const data = await fetchCategories();

    expect(data).toEqual(categories);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetchRestaurants', async () => {
    mockFetch(restaurants);
    const data = await fetchRestaurants();

    expect(data).toEqual(restaurants);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
