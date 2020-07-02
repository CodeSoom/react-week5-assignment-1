import { fetchInitRegions } from './api';

import { regions } from '../../__fixture__/data';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(regions),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('api', () => {
  describe('fetchInitRegions', () => {
    it('fetch initRegions', async () => {
      const rate = await fetchInitRegions();

      expect(rate).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
