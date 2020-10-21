import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';

import {
  fetchRegions,
  fetchCategories,
} from './api';

const mockFetch = (resolvedValue) => {
  global.fetch = jest.fn(() => (
    Promise.resolve({
      json: () => Promise.resolve(resolvedValue),
    })
  ));
};

describe('api', () => {
  test('fetchRegions', async () => {
    mockFetch(regions);

    expect(await fetchRegions()).toEqual(regions);
  });

  test('fetchCategories', async () => {
    mockFetch(categories);

    expect(await fetchCategories()).toEqual(categories);
  });
});
