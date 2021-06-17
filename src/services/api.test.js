import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

describe('api', () => {
  it('fetchCategories', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ categories: { id: 1, name: '한식' } }),
    }));
    const state = await fetchCategories();

    expect(state).not.toBeUndefined();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetchRegions', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ categories: { id: 1, name: '서울' } }),
    }));

    const state = await fetchRegions();

    expect(state).not.toBeUndefined();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetchRegions', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ categories: { id: 1, name: '마녀주방' } }),
    }));

    const state = await fetchRestaurants();

    expect(state).not.toBeUndefined();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
