import reducer from './reducer';

import {
  setFieldId,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  const initailState = {
    regions: [
      {
        id: 1,
        name: '서울',
      },
    ],
    categories: [
      {
        id: 1,
        name: '한식',
      },
    ],
    restaurants: [
      {
        id: 1,
        name: '정통집',
      },
    ],
    regionId: null,
    categorieId: null,
  };

  describe('setRegions', () => {
    it('render regions array', () => {
      const state = reducer(initailState, setRegions(initailState.regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategories', () => {
    it('render categories array', () => {
      const state = reducer(
        initailState,
        setCategories(initailState.categories),
      );

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('render restaurants array', () => {
      const state = reducer(
        initailState,
        setRestaurants(initailState.restaurants),
      );

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

    it('changes categorieId', () => {
      const state = reducer(
        initailState,
        setFieldId({
          name: 'categorieId',
          value: 1,
        }),
      );

      expect(state.categorieId).toBe(1);
    });
  });
});
