import {
  setRestaurants, setCategories, setRegions,
  updateRegionName, updateCategoryId,
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('with action type', () => {
    describe('setRestaurants', () => {
      function reduceSetRestaurants({ restaurants }) {
        return reducer({
          state: {
            restaurants: [{
              id: 1,
              name: '마녀주방',
            }, {
              id: 2,
              name: '마녀주방',
            }],
          },
          action: setRestaurants({ restaurants }),
        });
      }

      it('sets restaurants with new restaurants', () => {
        const state = reduceSetRestaurants({
          restaurants: [{
            id: 5,
            name: '피카츄',
          }],
        });

        expect(state.restaurants).toHaveLength(1);
      });

      it('sets restaurants with empty array', () => {
        const state = reduceSetRestaurants({
          restaurants: [],
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    describe('setCategories', () => {
      function reduceSetCategories({ categories }) {
        return reducer({
          state: {
            categories: [{
              id: 1,
              name: '한식',
            }],
          },
          action: setCategories({ categories }),
        });
      }

      it('sets categories with new categories', () => {
        const state = reduceSetCategories({
          categories: [{
            id: 5,
            name: '중식',
          }],
        });

        expect(state.categories).toHaveLength(1);
      });

      it('sets categories with empty array', () => {
        const state = reduceSetCategories({
          categories: [],
        });

        expect(state.categories).toHaveLength(0);
      });
    });

    describe('setRegions', () => {
      function reduceSetRegions({ regions }) {
        return reducer({
          state: {
            regions: [{
              id: 1,
              name: '서울',
            }],
          },
          action: setRegions({ regions }),
        });
      }

      it('sets regions with new regions', () => {
        const state = reduceSetRegions({
          regions: [{
            id: 5,
            name: '부산',
          }],
        });

        expect(state.regions).toHaveLength(1);
      });

      it('sets regions with empty array', () => {
        const state = reduceSetRegions({
          regions: [],
        });

        expect(state.regions).toHaveLength(0);
      });
    });

    describe('updateRegionName', () => {
      function reduceUpdateRegionName({ regionName }) {
        return reducer({
          state: {
            regionName: '',
          },
          action: updateRegionName({ regionName }),
        });
      }

      it('sets regionName with new regionName', () => {
        const state = reduceUpdateRegionName({
          regionName: '바르셀로나',
        });

        expect(state.regionName).toBe('바르셀로나');
      });
    });

    describe('updateCategoryId', () => {
      function reduceUpdateCategoryId({ categoryId }) {
        return reducer({
          state: {
            categoryId: -1,
          },
          action: updateCategoryId({ categoryId }),
        });
      }

      it('sets categoryId with new categoryId', () => {
        const state = reduceUpdateCategoryId({
          categoryId: 5,
        });

        expect(state.categoryId).toBe(5);
      });
    });
  });

  context('without action type', () => {
    function otherFunction({ id }) {
      return {
        type: 'otherFunction',
        payload: {
          id,
        },
      };
    }

    it("doesn't work", () => {
      const state = reducer({
        state: undefined,
        action: otherFunction({ id: 1 }),
      });

      expect(state.restaurants).toHaveLength(0);
    });
  });
});
