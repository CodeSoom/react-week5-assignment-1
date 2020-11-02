import reducer from './reducer';

import {
  updateRegion,
  updateCategoryId,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

import regions from '../fixtures/regions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      selectRegion: '',
      selectCategoryId: '',
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('updateRegion', () => {
    it('change selectRegion', () => {
      const initialState = {
        selectRegion: '',
      };

      const state = reducer(initialState, updateRegion('서울'));

      expect(state.selectRegion).toEqual('서울');
    });
  });

  describe('updateCategoryId', () => {
    it('change selectCategoryId', () => {
      const initialState = {
        selectCategoryId: '',
      };

      const state = reducer(initialState, updateCategoryId(1));

      expect(state.selectCategoryId).toEqual(1);
    });
  });

  describe('setRegions', () => {
    it('update Regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
      expect(state.regions[0].id).toEqual(1);
      expect(state.regions[0].name).toEqual('서울');
    });
  });

  describe('setCategories', () => {
    it('update Categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
      expect(state.categories[0].id).toEqual(1);
      expect(state.categories[0].name).toEqual('한식');
    });
  });

  describe('setRestaurants', () => {
    it('update Restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants([{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }]));

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
