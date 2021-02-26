import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import {
  regions,
  categories,
  restaurants,
} from '../../fixtures/index';

describe('api', () => {
  function fetchMaker(fetchData) {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => (fetchData),
    }));
  }

  describe('fetchRegions', () => {
    it('fetches regions', async () => {
      fetchMaker([regions[0]]);

      const fetchedRegions = await fetchRegions();

      expect(fetchedRegions).toHaveLength(1);
      expect(fetchedRegions[0].name).toBe('서울');
    });
  });

  describe('fetchCategories', () => {
    it('fetches categories', async () => {
      fetchMaker([categories[0]]);

      const fetchedCategories = await fetchCategories();

      expect(fetchedCategories).toHaveLength(1);
      expect(fetchedCategories[0].name).toBe('한식');
    });
  });

  describe('fetchRestaurants', () => {
    it('fetches restaurants', async () => {
      fetchMaker([restaurants[0]]);

      const fetchedRestaurants = await fetchRestaurants({
        region: '서울',
        category: '한식',
      });

      expect(fetchedRestaurants).toHaveLength(1);
      expect(fetchedRestaurants[0].name).toBe('양천주가');
    });
  });
});
