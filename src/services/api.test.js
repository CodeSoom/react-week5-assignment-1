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

    expect(regions).toBe(regionsFixture);
  });

  it('fetchCategories', async () => {
    mockingFetch(categoriesFixture);

    const categories = await fetchCategories();

    expect(categories).toBe(categoriesFixture);
  });

  it('fetchRestaurants', async () => {
    mockingFetch(restaurantsFixture);

    const restaurants = await fetchRestaurants();

    expect(restaurants).toBe(restaurantsFixture);
  });
});
