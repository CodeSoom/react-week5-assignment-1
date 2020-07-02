import reducer from './reducer';

import { changeRegion } from './actions';

describe('reducer', () => {
  describe('changeRegion', () => {
    context('when with name', () => {
      it('returns state with selected region', () => {
        const initialState = {
          region: '',
        };

        const state = reducer(initialState, changeRegion({ name: '서울' }));

        expect(state.region).toBe('서울');
      });
    });
  });

  describe('changeCategory', () => {
    context('when with name', () => {
      it('returns state with selected category', () => {
        const initialState = {
          category: '',
        };

        const state = reducer(initialState, changeRegion({ name: '한식' }));

        expect(state.region).toBe('한식');
      });
    });
  });
});
