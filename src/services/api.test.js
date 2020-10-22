import fetchMock from 'jest-fetch-mock';

import { fetchRestaurants, fetchRestaurantsName } from './api';
import { categoriesFixture, restaurantFixture } from '../../fixtures/fixtures';

fetchMock.enableMocks();

describe('api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('async "fetchRestaurants" call test', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: categoriesFixture }));

    const categories = await fetchRestaurants('categories');

    expect(categories.data).toEqual(categoriesFixture);
  });

  it('async "fetchRestaurantsName" call test', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: restaurantFixture }));

    const restaurants = await fetchRestaurantsName({ region: '서울', category: 1 });

    expect(restaurants.data).toEqual(restaurantFixture);
  });
});
