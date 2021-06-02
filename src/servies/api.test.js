/* eslint-disable no-prototype-builtins */

import { fetchRegions, fetchCategories } from './api';

jest.mock('./api');

describe('fetchCategories', () => {
  it('returns fetched categories', async () => {
    const data = await fetchCategories();
    expect(Array.isArray(data)).toBe(true);
  });
});
