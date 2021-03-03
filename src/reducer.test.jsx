import reducer from './reducer';

import {
  setRegions, setCategories, setRestaurants,
  regionSelect, categorySelect,
} from './actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    regionName: '',
    categoryId: '',
    restaurants: [],
  };

  describe('initialState', () => {
    context('with action', () => {
      it('returns initialState', () => {
        const state = reducer(undefined, setRegions);

        expect(state).toEqual(initialState);
      });
    });

    context('without action', () => {
      it('returns initialState', () => {
        const state = reducer();

        expect(state).toEqual(initialState);
      });
    });
  });

  describe('setRegions', () => {
    it('sets regions from loaded regions', () => {
      const state = reducer({ regions: [] }, setRegions([{ id: 1, name: '서울' }]));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('sets categories from loaded categories', () => {
      const state = reducer({ categories: [] }, setCategories([{ id: 1, name: '한식' }]));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('sets restaurants from loaded restaurants', () => {
      const state = reducer({ restaurants: [] }, setRestaurants([{ id: 1, name: '우리집' }]));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('regionSelect', () => {
    it('saves region name region which selected', () => {
      const state = reducer({ regionName: '' }, regionSelect('서울'));

      expect(state.regionName).toEqual('서울');
    });
  });

  describe('categorySelect', () => {
    it('saves category id which selected', () => {
      const state = reducer({ categoryId: '' }, categorySelect(1));

      expect(state.categoryId).toEqual(1);
    });
  });
});
