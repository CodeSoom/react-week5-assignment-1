import reducer from './reducer';

import { SET_REGIONS } from './actions';

describe('reducer', () => {
  describe(SET_REGIONS, () => {
    it('sets restaurant regions', () => {
      const previousState = {
        regions: [],
      };
      const action = {
        type: SET_REGIONS,
        payload: [{ id: 1, name: '서울' }],
      };
      const state = reducer(previousState, action);

      expect(state.regions).toMatchObject([{ id: 1, name: '서울' }]);
    });
  });

  describe('SET_CATEGORIES', () => {
    it('sets restaurant categories', () => {
      const previousState = {
        categories: [],
      };
      const action = {
        type: 'SET_CATEGORIES',
        payload: [{ id: 1, name: '한식' }],
      };
      const state = reducer(previousState, action);

      expect(state.categories).toMatchObject([{ id: 1, name: '한식' }]);
    });
  });
});
