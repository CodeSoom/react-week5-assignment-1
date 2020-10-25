import { enableFetchMocks } from 'jest-fetch-mock';

import {
  fetchCategories,
} from './api';

import categories from '../../fixtures/categories';

describe('api', () => {
  enableFetchMocks();

  context('fetchCategories', () => {
    it('fetches categories data', async () => {
      fetch.mockResponse(JSON.stringify({ data: categories }));

      const response = await fetchCategories();
      expect(response.data).toEqual(categories);
    });
  });
});
