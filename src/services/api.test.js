import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

import {
  fetchRegions,
  fetchCategories,
} from './api';

const mockFetch = (resolvedValue) => {
  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(resolvedValue),
    })
  ));
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

    expect(await fetchRestaurants({
      categoryId: 1,
      regionName: '서울',
    })).toEqual(restaurants);
  });
});
