import categories from '../fixtures/categories';
import regions from '../fixtures/region';

import {
  setRegions,
  setCategories,
  setRegionName,
  setCategoryId,
  setRestaurants,
} from './actions';

import reducer from './reducer';

describe('Reducer', () => {
  const initailState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('Set regions', () => {
    it('Set state regions', () => {
      const state = reducer(initailState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('Set categories', () => {
    it('Set state categories', () => {
      const state = reducer(initailState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('Set regionName', () => {
    it('Set state regionName', () => {
      const state = reducer(initailState, setRegionName('서울'));

      expect(state.regionName).not.toBeNull();
    });
  });

  describe('Set categoryId', () => {
    it('Set state categoryId', () => {
      const state = reducer(initailState, setCategoryId(1));

      expect(state.categoryId).not.toBeNull();
    });
  });

  describe('Set Restuarants', () => {
    it('Set state Restuarants', () => {
      const state = reducer(initailState, setRestaurants(
        [
          {
            id: 1,
            categoryId: 1,
            name: '양천주가',
            address: '서울 강남구',
            information: '양천주가 in 서울 강남구',
          },
        ],
      ));

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
