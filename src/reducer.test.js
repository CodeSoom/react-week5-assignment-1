import {
  getCategories, getRegions, setCategory, setRegion,
} from './actions';

import {
  categories, category, region, regions,
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
        },
        regions: [],
        categories: [],
        region: '',
        category: '',
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

    describe('setCategory', () => {
      it('category를 return 한다', () => {
        const state = reducer({ category: '' }, setCategory(category));

        expect(state.category).toBe(category);
      });
    });
  });
});
