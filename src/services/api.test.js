import { getRegionsApi, getCategoriesApi, getRestaurantsApi } from './api';
import { categories, regions, restaurants } from '../fixtures/mockData';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function setFetchToMock(data) {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(data),
    }));
  }
  it('can get regions', async () => {
    setFetchToMock(regions);

    expect(await getRegionsApi()).toBe(regions);
  });

  it('can get categories', async () => {
    setFetchToMock(categories);

    expect(await getCategoriesApi()).toBe(categories);
  });

  it('can get restaurants', async () => {
    setFetchToMock(restaurants);

    expect(await getRestaurantsApi({ regionName: '서울', categoryId: 1 })).toBe(restaurants);
  });
});
