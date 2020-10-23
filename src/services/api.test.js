import { fetchRegions } from './api';

describe('api', () => {
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

  describe('fetchRegion', () => {
    it('get regions from server', async () => {
      const regions = await fetchRegions();
      expect(regions.length).toBeGreaterThan(1);
    });
  });
});
