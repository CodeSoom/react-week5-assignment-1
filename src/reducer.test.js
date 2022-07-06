import { getCategories, getRegions, setIsLoading } from './actions';

import { categories, regions } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  describe('setIsLoading', () => {
    it('isLoading 상태를 변경한다', () => {
      const state = reducer({ isLoading: true }, setIsLoading(false));

      expect(state.isLoading).toBe(false);
    });
  });

  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        isLoading: true,
        regions: [],
        categories: [],
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
  });
});
