import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

import regionsFixture from '../__fixtures__/regions';
import categoriesFixture from '../__fixtures__/categories';
import restaurantsFixture from '../__fixtures__/restaurants';

global.fetch = jest.fn();

function mockFetch(data) {
  fetch.mockImplementation(
    jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    }),
  );
}

describe('api', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetch regions', async () => {
    // given
    mockFetch(regionsFixture);
    // when
    const regions = await fetchRegions();
    // then
    expect(regions).toEqual(regionsFixture);
  });

  it('fetch categories', async () => {
    // given
    mockFetch(categoriesFixture);
    // when
    const categories = await fetchCategories();
    // then
    expect(categories).toEqual(categoriesFixture);
  });

  it('fetch restaurants by region and category', async () => {
    // given
    const region = regionsFixture[0];
    const category = categoriesFixture[0];
    mockFetch(restaurantsFixture);
    // when
    const restaurants = await fetchRestaurants(region, category);
    // then
    expect(restaurants).toEqual(restaurantsFixture);
  });
});
