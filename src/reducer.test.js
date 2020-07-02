import reducer from './reducer';

import { changeRegion } from './actions';

describe('reducer', () => {
  describe('changeRegion', () => {
    context('when with name', () => {
      it('returns state with selected region', () => {
        const initialState = {
          regions: [],
          region: '',
        };

        const state = reducer(initialState, changeRegion({ name: '서울' }));

        expect(state.region).toBe('서울');
      });
    });
  });
});
