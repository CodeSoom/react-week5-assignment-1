import reducer from './reducer';

import { setAddressList, selectAddress } from './actions';

import { initialState, addressList } from '../__fixture__/restaurants';

describe('reducer', () => {
  describe('setAddressList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setAddressList(addressList));

      expect(state.addressList).not.toHaveLength(0);
    });
  });

  describe('selectAddress', () => {
    it('레스토랑 지역 정보가 선택된다.', () => {
      const state = reducer(initialState, selectAddress('서울'));

      expect(state.selectedAddress).toBe('서울');
    });
  });
});
