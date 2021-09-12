import given from 'given2';
import { fetchCategories, fetchRestaurants, fetchRegions } from './api';

describe('api', () => {
  given('data', () => ({}));

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([given.data]),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchCategories', () => {
    it('returns categories', async () => {
      given('data', () => ({ id: 1, name: '한식' }));

      const categories = await fetchCategories();

      expect(categories).toEqual([
        { id: 1, name: '한식' },
      ]);
    });

    it('returns [] when error occurs', async () => {
      fetch.mockImplementationOnce(() => Promise.reject(new Error('Error occurs')));

      const categories = await fetchCategories();

      expect(categories).toEqual([]);
    });
  });

  describe('fetchRegions', () => {
    given('data', () => ({ id: 1, name: '서울' }));

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual([
        { id: 1, name: '서울' },
      ]);
    });

    it('returns [] when error occurs', async () => {
      fetch.mockImplementationOnce(() => Promise.reject(new Error('Error occurs')));

      const regions = await fetchRegions();

      expect(regions).toEqual([]);
    });
  });

  describe('fetchRestaurants', () => {
    given('data', () => ({
      id: 1,
      categoryId: 1,
      name: '맥도날드',
      address: '서울 강남구 123456',
      information: '맥도날드 in 서울 강남구 123456',
    }));

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

      expect(restaurants).toEqual([{
        id: 1,
        categoryId: 1,
        name: '맥도날드',
        address: '서울 강남구 123456',
        information: '맥도날드 in 서울 강남구 123456',
      },
      ]);
    });

    it('returns [] when error occurs', async () => {
      fetch.mockImplementationOnce(() => Promise.reject(new Error('Error occurs')));

      const restaurants = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

      expect(restaurants).toEqual([]);
    });
  });
});
