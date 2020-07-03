import reducer from './reducer';

import {
  setAddressList,
  selectAddress,
  selectCategory,
  setCategoryList,
  setRestaurants,
} from './actions';

import {
  initialState,
  addressList,
  containAddressState,
  containCategoryState,
  categoryList,
  restaurants,
} from '../__fixture__/restaurants';

describe('reducer', () => {
  context('state 값이 전달되지 않으면', () => {
    it('initialState가 state 값으로 사용된다.', () => {
      const state = reducer(undefined, setAddressList([]));

      expect(state).toEqual(initialState);
    });
  });

  context('존재하지 않는 action을 전달하면', () => {
    it('기존 state가 그대로 반환된다.', () => {
      const state = reducer(initialState, { type: 'noExistAction' });

      expect(state).toEqual(initialState);
    });
  });

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

      expect(state.selectedAddress).toBe(state.addressList[0]);
    });
  });

  describe('selectCategory', () => {
    it('레스토랑 지역 정보가 선택된다.', () => {
      const state = reducer(
        containCategoryState,
        selectCategory(containCategoryState.categoryList[0].id),
      );

      expect(state.selectedCategory).toBe(state.categoryList[0]);
    });
  });

  describe('setCategoryList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setCategoryList(categoryList));

      expect(state.categoryList).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 정보가 등록된다.', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
