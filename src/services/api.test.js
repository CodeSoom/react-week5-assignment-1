import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

import { CATEGORIES, REGIONS, RESTAURANTS } from '../lib/fixtures';

describe('api', () => {
  describe('fetchCategories', () => {
    it('카테고리 데이터를 정상적으로 반환한다', async () => {
      fetch.mockResponseOnce(JSON.stringify(CATEGORIES));

      const response = await fetchCategories();

      expect(response).toEqual(CATEGORIES);
    });
  });

  describe('fetchRegions', () => {
    it('지역 데이터를 정상적으로 반환한다', async () => {
      fetch.mockResponseOnce(JSON.stringify(REGIONS));

      const response = await fetchRegions();

      expect(response).toEqual(REGIONS);
    });
  });

  describe('fetchRestaurants', () => {
    context('지역 또는 카테고리 값이 없으면', () => {
      it('빈 배열을 반환한다', async () => {
        fetch.mockResponseOnce(JSON.stringify([]));

        const response = await fetchRestaurants();

        expect(response).toEqual([]);
      });
    });

    context('지역과 카테고리 값이 모두 있으면', () => {
      it('조건에 맞는 데이터를 반환한다', async () => {
        fetch.mockResponseOnce(JSON.stringify(RESTAURANTS));

        const response = await fetchRestaurants('서울', 1);

        expect(response).toEqual(RESTAURANTS);
      });
    });

    context('에러가 발생하면', () => {
      it('에러를 던짐', async () => {
        fetch.mockReject(new Error('에러발생'));

        try {
          await fetchRestaurants();
        } catch (error) {
          expect(error.message).toBe('에러발생');
        }
      });
    });
  });
});
