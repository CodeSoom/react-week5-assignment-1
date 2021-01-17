import regionsFixture from '../../fixtures/regions';
import categoriesFixture from '../../fixtures/categories';
import restaurantsFixture from '../../fixtures/restaurants';
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

describe('api', () => {
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

    const restaurants = await fetchRestaurants({ regionId: 1, categoryId: 1 });

    expect(restaurants).toStrictEqual(restaurantsFixture);
  });
});
