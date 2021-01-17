import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

function mockFetch(data) {
  window.fetch = jest.fn().mockResolvedValue({
    json: async () => data,
  });
}

describe('api', () => {
  it('fetches regions', async () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    mockFetch(regions);

    expect(await fetchRegions()).toEqual(regions);
  });

  it('fetches categories', async () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    mockFetch(categories);

    expect(await fetchCategories()).toEqual(categories);
  });

  it('fetches restaurants', async () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    mockFetch(restaurants);

    expect(await fetchRestaurants({
      regionName: null,
      categoryId: null,
    })).toEqual(restaurants);
  });
});
