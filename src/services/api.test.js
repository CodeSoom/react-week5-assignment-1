import regionsFixture from '../../fixtures/regions';
import categoriesFixture from '../../fixtures/categories';
import restaurantsFixture from '../../fixtures/restaurants';
import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

function mockingFetch(jsonData) {
  global.fetch = jest.fn(async () => ({
    json: async () => jsonData,
  }));
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('api', () => {
  it('fetchRegion', async () => {
    mockingFetch(regionsFixture);

    const regions = await fetchRegions();

    expect(regions).toStrictEqual(regionsFixture);
  });

  it('fetchCategories', async () => {
    mockingFetch(categoriesFixture);

    const categories = await fetchCategories();

    expect(categories).toStrictEqual(categoriesFixture);
  });

  it('fetchRestaurants', async () => {
    mockingFetch(restaurantsFixture);

    const restaurants = await fetchRestaurants({ regionId: 1, categoryId: 1 });

    expect(restaurants).toStrictEqual(restaurantsFixture);
  });
});
