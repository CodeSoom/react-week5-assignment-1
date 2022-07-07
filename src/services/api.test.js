import regions from '../fixtures/regions';

import { baseURL, fetchCategories, fetchRegions } from './api';

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(regions),
      }));
    });

    it('지역 목록 Api를 호출합니다.', async () => {
      await fetchRegions();

      expect(fetch).toHaveBeenCalledWith(`${baseURL}/regions`);
    });
  });

  describe('fetchCategories', () => {
    it('카테고리 목록 Api를 호출합니다.', async () => {
      await fetchCategories();

      expect(fetch).toHaveBeenCalledWith(`${baseURL}/categories`);
    });
  });
});
