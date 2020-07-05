import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json() {
      return {};
    },
  });
});
describe('fetchCategories', () => {
  it('returns empty object', async () => {
    const data = await fetchCategories();
    expect(data).toEqual({});
  });
});

describe('fetchRegions', () => {
  it('returns empty object', async () => {
    const data = await fetchRegions();
    expect(data).toEqual({});
  });
});

describe('fetchRestaurants', () => {
  it('returns empty object', async () => {
    const data = await fetchRestaurants({ regionName: '서울', categoryId: 1 });
    expect(data).toEqual({});
  });
});

describe('fetchRestaurants without required parameter', () => {
  it('returns null', async () => {
    const data = await fetchRestaurants({ categoryId: 1 });
    expect(data).toEqual({});
  });
});
