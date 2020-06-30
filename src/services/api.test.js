import { fetchRegions, fetchCategories } from './api';

import regionsFixture from '../__fixtures__/regions';
import categoriesFixture from '../__fixtures__/categories';

global.fetch = jest.fn();

function mockFetch(data) {
  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));
}

describe('api', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetch regions', async () => {
    // given
    mockFetch(regionsFixture);
    // when
    const regions = await fetchRegions();
    // then
    expect(regions).toEqual(regionsFixture);
  });

  it('fetch categories', async () => {
    // given
    mockFetch(categoriesFixture);
    // when
    const categories = await fetchCategories();
    // then
    expect(categories).toEqual(categoriesFixture);
  });
});
