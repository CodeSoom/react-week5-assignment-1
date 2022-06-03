import reducer from './reducer';

import {
  setFieldId,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  const initailState = {
    regions: [],
    categories: [],
    restaurants: [],
    regionId: null,
    categoryId: null,
  };

  describe('setRegions', () => {
    it('render regions array', () => {
      const regions = [{ id: 1, name: '서울' }];
      const state = reducer(initailState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it('render categories array', () => {
      const categories = [{ id: 1, name: '한식' }];
      const state = reducer(initailState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('render restaurants array', () => {
      const restaurants = [{ id: 1, name: '맛집' }];
      const state = reducer(initailState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('setFieldId', () => {
    it('changes regionId', () => {
      const state = reducer(
        initailState,
        setFieldId({
          name: 'regionId',
          value: 1,
        }),
      );

      expect(state.regionId).toBe(1);
    });

    it('changes categoryId', () => {
      const state = reducer(
        initailState,
        setFieldId({
          name: 'categoryId',
          value: 1,
        }),
      );

      expect(state.categoryId).toBe(1);
    });
  });
});
