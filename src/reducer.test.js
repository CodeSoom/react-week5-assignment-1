import {
  getCategories, getRegions, getRestaurants, setCategoryId, setRegion,
} from './actions';

import {
  categories, categoryId, region, regions, restaurants,
} from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        isLoading: {
          regions: true,
          categories: true,
          restaurants: false,
        },
        regions: [],
        categories: [],
        restaurants: [],
        region: '',
        categoryId: '',
      });
    });
  });

  context('state가 있는경우', () => {
    describe('getRegions', () => {
      it('regions를 return 한다', () => {
        const state = reducer({ regions: [] }, getRegions(regions));

        expect(state.regions).toBe(regions);
      });
    });

    describe('getCategories', () => {
      it('categories를 return 한다', () => {
        const state = reducer({ categories: [] }, getCategories(categories));

        expect(state.categories).toBe(categories);
      });
    });

    describe('segRegion', () => {
      it('region을 return 한다', () => {
        const state = reducer({ region: '' }, setRegion(region));

        expect(state.region).toBe(region);
      });
    });

    describe('setCategoryId', () => {
      it('categoryId를 return 한다', () => {
        const state = reducer({ categoryId: '' }, setCategoryId(categoryId));

        expect(state.categoryId).toBe(categoryId);
      });
    });

    describe('getRestaurants', () => {
      it('restaurants를 return 한다', () => {
        const state = reducer({ restaurants: [] }, getRestaurants(restaurants));

        expect(state.restaurants).toBe(restaurants);
      });
    });
  });
});
