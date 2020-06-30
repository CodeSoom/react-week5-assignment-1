import { fetchRegions, fetchCategories } from './api';

import regionsFixture from '../__fixtures__/regions';
import categoriesFixture from '../__fixtures__/categories';

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

  it('fetch categories', async () => {
    // given
    fetch.mockClear();
    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(categoriesFixture),
    }));
    // when
    const categories = await fetchCategories();
    // then
    expect(categories).toEqual(categoriesFixture);
  });
});
