import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './api';

import locations from '../../fixtures/locations';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

global.fetch = jest.fn();

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
    context('with regionName and category', () => {
      it('fetch restaurants', async () => {
        await fetchRestaurants({ regionName: '서울', categoryId: 1 });

        expect(global.fetch).toBeCalled();
      });
    });

    context('without regionName or category', () => {
      it('returns an empty array', async () => {
        const data = await fetchRestaurants({ regionName: '', category: '' });

        expect(data).toEqual([]);
      });
    });
  });
});
