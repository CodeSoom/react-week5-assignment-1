import {
  fetchRegions, fetchCategories, fetchRestaurants,
} from './api';

describe('api', () => {
  context('when fetchRegions is executed', () => {
    it('get regions', () => {
      const data = fetchRegions();

      expect(data).not.toBeNull();
    });
  });

  context('when fetchCategories is executed', () => {
    it('get categories', () => {
      const data = fetchCategories();

      expect(data).not.toBeNull();
    });
  });

  context('when fetchRestaurants is executed', () => {
    it('get restaurants', () => {
      const data = fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).not.toBeNull();
    });
  });
});
