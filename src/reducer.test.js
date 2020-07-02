import reducer from './reducer';

import { loadAddressList } from './actions';

import { initialState } from '../__fixture__/restaurants';

describe('reducer', () => {
  describe('loadAddressList', () => {
    it('레스토랑 지역 정보가 로딩된다.', () => {
      const state = reducer(initialState, loadAddressList());

      expect(state.addressList).not.toHaveLength(0);
    });
  });

  describe('setAddressList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setAddressList());

      expect(state.addressList).not.toHaveLength(0);
    });
  });
});
