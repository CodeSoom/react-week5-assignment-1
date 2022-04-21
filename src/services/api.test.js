import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './api';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(''),
}));

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchLocations', () => {
    it('fetches locations', async () => {
      await fetchLocations();

      expect(global.fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
    });
  });

  describe('fetchCategories', () => {
    it('fetches categories', async () => {
      await fetchCategories();

      expect(global.fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/categories');
    });
  });

  describe('fetchRestaurants', () => {
    context('with regionName and categoryId', () => {
      it('fetches restaurants', async () => {
        await fetchRestaurants({ regionName: '서울', categoryId: 1 });

        expect(global.fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/restaurants?region=서울&category=1');
      });
    });

    context('without regionName or categoryId', () => {
      it('returns an empty array', async () => {
        const data = await fetchRestaurants({ regionName: '', categoryId: '' });

        expect(data).toEqual([]);
      });
    });
  });
});
