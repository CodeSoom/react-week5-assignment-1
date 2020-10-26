import {
  fetchRegions,
} from './api';

jest.mock('./api');

describe('api', () => {
  it('fetchRegions', async () => {
    const regions = await fetchRegions();

    expect(regions).toHaveLength(0);
  });
});
