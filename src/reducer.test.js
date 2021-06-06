import reducer from './reducer';

import {
  checkRegion,
  checkCategory,
  setRestaurantRegions,
  setRestaurantCategories,
} from './actions';

describe('reducer', () => {
  describe('checkRegion', () => {
    describe('click same region', () => {
      context('with V sign', () => {
        it('removes V sign', () => {
          const state = reducer({
            regions: [
              { id: 1, name: '서울(V)' },
            ],
          }, checkRegion(1));

          expect(state.regions[0].name).toBe('서울');
        });
      });

      context('without V sign', () => {
        it('adds V sign', () => {
          const state = reducer({
            regions: [
              { id: 1, name: '서울' },
            ],
          }, checkRegion(1));

          expect(state.regions[0].name).toBe('서울(V)');
        });
      });
    });
    describe('click different region', () => {
      it('removes V sign and adds V sign', () => {
        const state = reducer({
          regions: [
            { id: 1, name: '서울(V)' },
            { id: 2, name: '대전' },
          ],
        }, checkRegion(2));

        expect(state.regions[0].name).toBe('서울');
        expect(state.regions[1].name).toBe('대전(V)');
      });
    });
  });

  describe('checkCategory', () => {
    describe('click same region', () => {
      context('with V sign', () => {
        it('removes V sign', () => {
          const state = reducer({
            categories: [
              { id: 1, name: '한식(V)' },
            ],
          }, checkCategory(1));

          expect(state.categories[0].name).toBe('한식');
        });
      });
      context('without V sign', () => {
        it('adds V sign', () => {
          const state = reducer({
            categories: [
              { id: 1, name: '한식' },
            ],
          }, checkCategory(1));

          expect(state.categories[0].name).toBe('한식(V)');
        });
      });
    });
    describe('click different category', () => {
      it('removes V sign and adds V sign', () => {
        const state = reducer({
          categories: [
            { id: 1, name: '한식(V)' },
            { id: 2, name: '중식' },
          ],
        }, checkCategory(2));

        expect(state.categories[0].name).toBe('한식');
        expect(state.categories[1].name).toBe('중식(V)');
      });
    });
  });

  describe('setRestaurantRegions', () => {
    it('fill restaurant regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer({
        regions: [],
      }, setRestaurantRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setRestaurantCategories', () => {
    it('fill restaurant categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer({
        categories: [],
      }, setRestaurantCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('fill restaurants', () => {
      const restaurants = [
        { id: 1, name: '한국식 초밥' },
      ];

      const state = reducer({
        restaurants: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
