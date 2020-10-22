import { enableFetchMocks } from 'jest-fetch-mock';
import { fetchRegions } from './api';

import regions from '../../__fixtures__/regions';

describe('api', () => {
  enableFetchMocks();

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('fetchRegions', () => {
    it('fetches regions data', async () => {
      fetch.mockResponse(JSON.stringify({ data: regions }));

      const response = await fetchRegions();
      expect(response.data).toEqual(regions);
    });
  });
});
