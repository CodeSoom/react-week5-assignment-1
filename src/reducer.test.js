import reducer from './reducer';

import {
  setRegion,
  setCategory,
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
        '홍콩반점',
        '포방터 돈까스',
      ];

      it('set restaurants', () => {
        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).toHaveLength(2);
      });
    });
  });
});
