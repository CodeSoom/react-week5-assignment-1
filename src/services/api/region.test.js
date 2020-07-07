import { fetchRegions } from './region';

import REGIONS from '../../__fixtures__/regions.json';

describe('fetchRegions', () => {
  global.fetch = jest.fn().mockResolvedValue({
    json() {
      return REGIONS;
    },
  });

  it('returns regions', async () => {
    const regions = await fetchRegions();
    expect(regions).toEqual(REGIONS);
  });
});
