import fetchMock from 'jest-fetch-mock';

import { fetchRestaurants, fetchRestaurantsName } from './api';
import { categoriesInfo, restaurantsInfo } from '../../fixtures/fixtures';

fetchMock.enableMocks();

describe('api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('async "fetchRestaurants" call test', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: categoriesInfo }));

    const categories = await fetchRestaurants('categories');

    expect(categories.data).toEqual(categoriesInfo);
  });

  it('async "fetchRestaurantsName" call test', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: restaurantsInfo }));

    const restaurants = await fetchRestaurantsName({ region: '서울', category: 1 });

    expect(restaurants.data).toEqual(restaurantsInfo);
  });
});
