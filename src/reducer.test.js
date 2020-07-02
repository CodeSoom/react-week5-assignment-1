import reducer from './reducer';

import { setAddressList } from './actions';

import { initialState, addressList } from '../__fixture__/restaurants';

describe('reducer', () => {
  describe('setAddressList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setAddressList(addressList));

      expect(state.addressList).not.toHaveLength(0);
    });
  });
});
