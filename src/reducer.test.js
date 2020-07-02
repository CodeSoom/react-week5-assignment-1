import reducer from './reducer';

import { setAddressList, selectAddress } from './actions';

import { initialState, addressList, containAddressState } from '../__fixture__/restaurants';

describe('reducer', () => {
  describe('setAddressList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setAddressList(addressList));

      expect(state.addressList).not.toHaveLength(0);
    });
  });

  describe('selectAddress', () => {
    it('레스토랑 지역 정보가 선택된다.', () => {
      const state = reducer(
        containAddressState,
        selectAddress(containAddressState.addressList[0].id),
      );

      expect(state.selectedAddress).toBe(state.addressList[0].name);
    });
  });
});
