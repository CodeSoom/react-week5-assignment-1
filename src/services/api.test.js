import { fetchRegions, fetchCategories } from './api';

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
});
