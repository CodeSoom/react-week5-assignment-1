import APIS from '../../constants/apis';
import mockRegions from '../../fixture/regions';
import mockCategories from '../../fixture/categories';
import mockRestaurants from '../../fixture/restaurants';

import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe('api', () => {
  test('fetchRegions', async () => {
    fetch.mockImplementationOnce(() => ({ json: async () => mockRegions }));

    const regions = await fetchRegions();

    expect(regions).toHaveLength(regions.length);
    expect(fetch).toHaveBeenCalledWith(APIS.REGIONS);
  });

  test('fetchCategories', async () => {
    fetch.mockImplementationOnce(() => ({ json: async () => mockCategories }));

    const categories = await fetchCategories();

    expect(categories).toHaveLength(categories.length);
    expect(fetch).toHaveBeenCalledWith(APIS.CATEGORIES);
  });

  test('fetchRestaurants', async () => {
    fetch.mockImplementationOnce(() => ({ json: async () => mockRestaurants }));

    const restaurants = await fetchRestaurants(mockRegions[0].name, mockCategories[0].id);

    expect(restaurants).toHaveLength(restaurants.length);
    expect(fetch).toHaveBeenCalledWith(`${APIS.RESTAURANTS}?region=${mockRegions[0].name}&category=${mockCategories[0].id}`);
  });
});
