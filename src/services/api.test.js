import APIS from '../../constants/apis';
import mockRegions from '../../fixture/regions';
import mockCategories from '../../fixture/categories';

import { fetchRegions, fetchCategories } from './api';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe('api', () => {
  test('fetchRegions', async () => {
    fetch.mockImplementationOnce(() => ({ json: () => Promise.resolve(mockRegions) }));

    const regions = await fetchRegions();

    expect(regions).toHaveLength(regions.length);
    expect(fetch).toHaveBeenCalledWith(APIS.REGIONS);
  });

  test('fetchCategories', async () => {
    fetch.mockImplementationOnce(() => ({ json: () => Promise.resolve(mockCategories) }));

    const categories = await fetchCategories();

    expect(categories).toHaveLength(categories.length);
    expect(fetch).toHaveBeenCalledWith(APIS.CATEGORIES);
  });
});
