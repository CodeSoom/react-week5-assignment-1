import fetchRegions from './api';

import regionsFixture from '../__fixtures__/regions';

global.fetch = jest.fn();

describe('api', () => {
  it('fetch regions', async () => {
    // given
    fetch.mockClear();
    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(regionsFixture),
    }));
    // when
    const regions = await fetchRegions();
    // then
    expect(regions).toEqual(regionsFixture);
  });
});
