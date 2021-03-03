import { fetchCategories, fetchLocations, fetchRestaurants } from './api';

import locations from '../../fixtures/locations';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

function dataMock(data) {
  global.fetch = jest.fn(async () => Promise.resolve({
    json: async () => Promise.resolve(data),
  }));
}

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetchLoactions', async () => {
    dataMock(locations);

    const data = await fetchLocations();

    expect(data).toBe(locations);
  });

  it('fetchCategories', async () => {
    dataMock(categories);

    const data = await fetchCategories();

    expect(data).toBe(categories);
  });

  it('fetchRestaurants', async () => {
    dataMock(restaurants);

    const data = await fetchRestaurants();

    expect(data).toBe(restaurants);
  });
});
