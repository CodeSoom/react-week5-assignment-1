import { fetchRegions, fetchCategories } from './api';

describe('api', () => {
  describe('fetchRegions', () => {
    context('when requests regions', () => {
      it('get regions data', () => {
        async function loadRegions() {
          const result = fetchRegions();

          expect(result).not.toHaveLength(0);
          expect(result[0].id).toBe(1);
          expect(result[0].name).toBe('서울');
        }

        loadRegions();
      });
    });
  });

  describe('fetchCategories', () => {
    context('when requests categories', () => {
      it('get categories data', () => {
        async function loadCategories() {
          const result = fetchCategories();

          expect(result).not.toHaveLength(0);
          expect(result[0].id).toBe(1);
          expect(result[0].name).toBe('한식');
        }

        loadCategories()
      });
    });
  });
});
