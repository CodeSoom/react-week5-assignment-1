import APIS from '../../constants/apis';
import mockRegions from '../../fixture/regions';

import { fetchRegions } from './api';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe('api', () => {
  fetch.mockImplementationOnce(() => ({ json: () => Promise.resolve(mockRegions) }));

  test('fetchRegions', async () => {
    const regions = await fetchRegions();

    expect(regions).toHaveLength(regions.length);
    expect(fetch).toHaveBeenCalledWith(APIS.REGIONS);
  });
});
