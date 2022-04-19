import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './api';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(''),
  }));

  global.fetch = fetch;

  it('called with regions url', async () => {
    await fetchRegions();

    expect(fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
  });

  it('called with categories url', async () => {
    await fetchCategories();

    expect(fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/categories');
  });

  it('called with restaurants url', async () => {
    await fetchRestaurants({ regionName: '서울', categoryId: 1 });

    expect(fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/restaurants?region=서울&category=1');
  });
});
