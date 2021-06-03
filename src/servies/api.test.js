import { fetchRegions, fetchCategories, fetchRestuarants } from './api';

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

    expect(Array.isArray(data)).toBe(true);
  });
});

describe('fetchRestuarants', () => {
  it('returns fetched restuarants', async () => {
    const data = await fetchRestuarants('서울', '1');

    expect(Array.isArray(data)).toBe(true);
  });
});
