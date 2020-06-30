import { fetchRegions, fetchCategories, fetchRestaurants } from './api';

describe('api', () => {
  describe('fetchRegions', () => {
    context('when requests regions', () => {
      it('get regions data', () => {
        async function loadRegions() {
          const result = await fetchRegions();

          expect(result[0]).toEqual({
            id: 1,
            name: '서울',
          });
        }

        loadRegions();
      });
    });
  });

  describe('fetchCategories', () => {
    context('when requests categories', () => {
      it('get categories data', () => {
        async function loadCategories() {
          const result = await fetchCategories();

          expect(result[0]).toEqual({
            id: 1,
            name: '한식',
          });
        }

        loadCategories();
      });
    });
  });

  describe('fetchRestaurants', () => {
    context('when requests reataurants with region name and category id', () => {
      it('get reataurants data', () => {
        async function loadRestaurants() {
          const result = await fetchRestaurants(regionName='서울', categoryId=1);

          expect(result[0]).toEqual({
            id: 1,
            categoryId: 1,
            name: '양천주가',
            address: '서울 강남구',
            infomation: '양천주가 in 서울 강남구',
          });
        }

        loadRestaurants();
      });
    });
  });
});
