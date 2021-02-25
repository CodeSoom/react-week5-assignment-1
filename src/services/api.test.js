import { getRegions, getCategories } from './api';
import { categories, regions } from '../fixtures/mockData';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function setFetchToMock(data) {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(data),
    }));
  }
  it('can get regions', async () => {
    setFetchToMock(regions);

    expect(await getRegions()).toBe(regions);
  });

  it('can get categories', async () => {
    setFetchToMock(categories);

    expect(await getCategories()).toBe(categories);
  });
});
