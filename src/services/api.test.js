import {
  fetchCategories,
  fetchRegions,
} from './api';

describe('api', () => {
  beforeEach(() => jest.clearAllMocks());

  context('with fetchCategories', () => {
    it('fetches categories', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: '한식' }]),
      }));

      const categories = await fetchCategories();

      expect(categories).toEqual([{ id: 1, name: '한식' }]);
      expect(fetch).toHaveBeenCalled();
    });
  });

  context('with fetchRegions', () => {
    it('fetches regions', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: '서울' }]),
      }));

      const regions = await fetchRegions();

      expect(regions).toEqual([{ id: 1, name: '서울' }]);
      expect(fetch).toHaveBeenCalled();
    });
  });
});
