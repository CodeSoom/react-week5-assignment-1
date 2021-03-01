import reducer from './reducer';

import {
  setRegion,
  setCategory,
  setCategories,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  context('without registered action', () => {
    it('does not change the state', () => {
      const initialState = {
        currentRegion: '',
      };

      const state = reducer(initialState, {
        type: undefined,
      });

      expect(state).toBe(initialState);
    });
  });

  context('with registered action', () => {
    describe('setRegion', () => {
      context('without previous state', () => {
        const initialState = undefined;

        it('sets region using initial state', () => {
          const state = reducer(initialState, setRegion('서울'));

          expect(state.currentRegion).toBe('서울');
        });
      });

      context('with previous state', () => {
        const initialState = {
          currentRegion: '',
        };

        it('sets region', () => {
          const state = reducer(initialState, setRegion('서울'));

          expect(state.currentRegion).toBe('서울');
        });
      });
    });

    describe('setCategory', () => {
      const initialState = {
        currentCategory: '',
      };

      it('sets category', () => {
        const state = reducer(initialState, setCategory('한식'));

        expect(state.currentCategory).toBe('한식');
      });
    });

    describe('setRestaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        }, {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          information: '한국식 초밥 in 서울 강남구',
        },
      ];

      it('set restaurants', () => {
        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).toHaveLength(2);
      });
    });

    describe('setCategories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' }, { id: 2, name: '중식' },
      ];

      it('set restaurants', () => {
        const state = reducer(initialState, setCategories(categories));

        expect(state.categories).toHaveLength(2);
      });
    });
  });
});
