import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './api';

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('api', () => {
  describe('fetchLocations', () => {
    it('fetch locations', async () => {
      await fetchLocations();

      expect(global.fetch).toBeCalled();
    });
  });

  describe('fetchCategories', () => {
    it('fetch categories', async () => {
      await fetchCategories();

      expect(global.fetch).toBeCalled();
    });
  });

  describe('fetchRestaurants', () => {
    context('with regionName and categoryId', () => {
      it('fetch restaurants', async () => {
        await fetchRestaurants({ regionName: '서울', categoryId: 1 });

        expect(global.fetch).toBeCalled();
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
