import regions from '../../fixtures/regions';

import { fetchRegions } from './api';

global.fetch = jest.fn(() => (
  Promise.resolve({
    json: () => Promise.resolve(regions),
  })
));

test('fetchRegions', async () => {
  const fetchedRegions = await fetchRegions();

  expect(fetchedRegions).toEqual(regions);
});
