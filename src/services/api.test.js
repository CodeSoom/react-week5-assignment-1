import { fetchRegions, fetchCategories } from './api';

describe('api', () => {
  describe('fetchRegion', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '대구' },
      ]),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('get regions from server', async () => {
      const regions = await fetchRegions();
      expect(regions.length).toBeGreaterThan(1);
    });
  });

  describe('fetchCategories', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
      ]),
    }));

    beforeEach(() => {
      global.fetch.mockClear();
    });

    it('get categories from server', async () => {
      const categories = await fetchCategories();
      expect(categories.length).toBeGreaterThan(1);
    });
  });
});
