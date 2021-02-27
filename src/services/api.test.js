import { fetchLocations } from './api';

import locations from '../../fixtures/locations';

function dataMock(data) {
  global.fetch = jest.fn(async () => Promise.resolve({
    json: async () => Promise.resolve(data),
  }));
}

describe('api', () => {
  it('fetchLoactions', async () => {
    dataMock(locations);

    const data = await fetchLocations();

    expect(data).toBe(locations);
  });
});
