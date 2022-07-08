import {
  baseURL, fetchCategories, fetchRegions, fetchRestaurants,
} from './api';

describe('api', () => {
  describe('fetchRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({ json: () => {} });
    });

    it('지역 목록 Api를 호출합니다.', async () => {
      await fetchRegions();

      expect(fetch).toHaveBeenCalledWith(`${baseURL}/regions`);
    });
  });

  describe('fetchCategories', () => {
    it('카테고리 목록 Api를 호출합니다.', async () => {
      await fetchCategories();

      expect(fetch).toHaveBeenCalledWith(`${baseURL}/regions`);
    });
  });

  describe('fetchRestaurants', () => {
    it('레스토랑 목록 Api를 호출합니다.', async () => {
      await fetchRestaurants();

      expect(fetch).toHaveBeenCalledWith(`${baseURL}/restaurants?region='서울'&category='3'`);
    });
  });
});
