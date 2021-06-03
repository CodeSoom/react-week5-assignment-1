import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

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
  context('when both category and region is selected', () => {
    it('returns fetched restuarants', async () => {
      const data = await fetchRestaurants('서울', 1);

      expect(Array.isArray(data)).toBe(true);
    });
  });

  context('when something is unselected', () => {
    it('returns empty restuarants array', async () => {
      const data = await fetchRestaurants(null, 1);

      expect(data).toEqual([]);
    });
  });
});
