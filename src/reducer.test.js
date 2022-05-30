import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  changeRegion,
  changeCategory,
} from './actions';

describe('reducer', () => {
  context('존재하는 액션 타입이면', () => {
    describe('setRegions', () => {
      it('sets regions with new regions', () => {
        const regions = [{ id: 1, name: '수원' }];

        const initialState = {
          regions: [],
        };

        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).toHaveLength(1);
      });
    });

    describe('setCategories', () => {
      it('sets categories with new categories', () => {
        const categories = [{ id: 1, name: '패스트푸드' }];

        const initialState = {
          categories: [],
        };

        const state = reducer(initialState, setCategories(categories));

        expect(state.categories).toHaveLength(1);
      });
    });

    describe('setRestaurants', () => {
      it('sets restaurants with new restaurants', () => {
        const restaurants = [
          { id: 1, name: '버거킹' },
          { id: 2, name: '입주집' },
        ];

        const initialState = {
          restaurants: [],
        };

        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).toHaveLength(2);
      });
    });

    describe('changeRegion', () => {
      it('change region', () => {
        const region = '수원';

        const initialState = {
          region: '',
        };

        const state = reducer(initialState, changeRegion(region));

        expect(state.region).toBe('수원');
      });
    });

    describe('changeCategory', () => {
      it('change category', () => {
        const category = '패스트푸드';

        const initialState = {
          category: '',
        };

        const state = reducer(initialState, changeCategory(category));

        expect(state.category).toBe('패스트푸드');
      });
    });
  });

  context('존재하지 않는 액션 타입이면', () => {
    it("state doesn't change", () => {
      const state = reducer(undefined, {
        type: 'notExistingAction',
        payload: {
          region: '수원',
          category: '패스트푸드',
        },
      });

      expect(state.region).toBe('');
      expect(state.category).toBe('');
    });
  });
});
