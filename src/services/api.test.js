import { fetchInitRegions } from './api';

import { regions, categories } from '../../__fixture__/data';





global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(regions),
  categories: () => Promise.resolve(categories),
}));

beforeEach(() => {
  fetch.mockClear();
});

async function fetchInitCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.categories();
  return data;
}

describe('api', () => {
  describe('fetchInitRegions', () => {
    it('fetch initRegions', async () => {
      const rate = await fetchInitRegions();

      expect(rate).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe('fetchInitCategories', () => {
    it('fetch initCategories', async () => {
      const rate = await fetchInitCategories();

      expect(rate).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });


});
