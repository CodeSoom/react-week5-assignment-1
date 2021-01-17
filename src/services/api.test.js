import regionsFixture from '../../__fixtures__/regions';
import categoriesFixture from '../../__fixtures__/categories';
import restaurantsFixture from '../../__fixtures__/restaurants';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

function mockFetch(jsonData) {
  global.fetch = jest.fn(async () => ({
    json: async () => jsonData,
  }));
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Api', () => {
  it('fetchRegion', async () => {
    mockFetch(regionsFixture);
    const regions = await fetchRegions();

    expect(regions).toStrictEqual(regionsFixture);
  });

  it('fetchCategories', async () => {
    mockFetch(categoriesFixture);
    const categories = await fetchCategories();

    expect(categories).toStrictEqual(categoriesFixture);
  });

  it('fetchRestaurants', async () => {
    mockFetch(restaurantsFixture);
    const restaurants = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

    expect(restaurants).toStrictEqual(restaurantsFixture);
  });
});
