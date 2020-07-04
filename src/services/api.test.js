import {
  fetchRegions, fetchCategories, fetchRestaurants,
} from './api';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([]),
}));

describe('api', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  context('when fetchRegions is executed', () => {
    it('get regions', () => {
      const data = fetchRegions();

      expect(data).not.toBeNull();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  context('when fetchCategories is executed', () => {
    it('get categories', () => {
      const data = fetchCategories();

      expect(data).not.toBeNull();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  context('when fetchRestaurants is executed', () => {
    it('get restaurants', () => {
      const data = fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(data).not.toBeNull();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
