import reducer from './reducer';

import {
  setRegion,
  setCategory,
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

        it('set region using initial state', () => {
          const state = reducer(initialState, setRegion('서울'));

          expect(state.currentRegion).toBe('서울');
        });
      });

      context('with previous state', () => {
        const initialState = {
          currentRegion: '',
        };

        it('set region', () => {
          const state = reducer(initialState, setRegion('서울'));

          expect(state.currentRegion).toBe('서울');
        });
      });
    });

    describe('setCategory', () => {
      const initialState = {
        currentCategory: '',
      };

      it('set category', () => {
        const state = reducer(initialState, setCategory('한식'));

        expect(state.currentCategory).toBe('한식');
      });
    });
  });
});
