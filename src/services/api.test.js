import { getRegions } from './api';
import { regions } from '../fixtures/mockData';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('can get regions', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(regions),
    }));

    expect(await getRegions()).toBe(regions);
  });
});
