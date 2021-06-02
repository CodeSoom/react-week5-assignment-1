/* eslint-disable no-prototype-builtins */

import { fetchRegions, fetchCategories } from './api';

jest.mock('./api');

describe('fetchCategories', () => {
  it('returns fetched categories', async () => {
    const data = await fetchCategories();
    expect(data).toBeArrayOfObjectWith('id', 'name');
  });
});

describe('fetchRegions', () => {
  it('returns fetched regions', async () => {
    const data = await fetchRegions();
    expect(data).toBeArrayOfObjectWith('id', 'name');
  });
});
