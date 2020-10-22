import reducer from './reducer';

import {
  updateRegion,
  updateCategoryId,
} from './actions';

describe('reducer', () => {
  describe('updateRegion', () => {
    it('change region value', () => {
      const initialState = {
        region: '',
      };

      const state = reducer(initialState, updateRegion('서울'));

      expect(state.region).toEqual('서울');
    });
  });

  describe('updateCategoryId', () => {
    it('change categoryId value', () => {
      const initialState = {
        categoryId: '',
      };

      const state = reducer(initialState, updateCategoryId(1));

      expect(state.categoryId).toEqual(1);
    });
  });
});
