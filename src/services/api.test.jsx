import { fetchRegions, fetchCategories } from './api';

import { regions, categories } from '../../fixtures/restaurants';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function fetchMockAdapter(data) {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(data),
    }));
  }

  it('regions 데이터를 받아온다.', async () => {
    fetchMockAdapter(regions);

    expect(await fetchRegions()).toBe(regions);
  });

  it('categories 데이터를 받아온다.', async () => {
    fetchMockAdapter(categories);

    await expect(fetchCategories()).resolves.toBe(categories);
  });
});
