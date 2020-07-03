import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import AddressListContainer from './AddressListContainer';

import {
  addressList,
  initialState,
  selectedAddress,
} from '../__fixture__/restaurants';

import { selectAddress } from './actions';

jest.mock('react-redux');

describe('AddressListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      addressList,
      selectedAddress: initialState.selectedAddress,
      selectedCategory: initialState.selectedCategory,
    }));
  });

  context('지역이 선택되지 않은 경우', () => {
    it('레스토랑 지역 목록이 로딩된다.', () => {
      const { getByText } = render((
        <AddressListContainer />
      ));

      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('지역이 선택된 경우', () => {
    it('레스토랑 지역 목록이 로딩되고 선택된 항목에 체크 표시됨.', () => {
      useSelector.mockImplementation((selector) => selector({
        addressList,
        selectedAddress,
        selectedCategory: {},
      }));

      const { getByText } = render((
        <AddressListContainer />
      ));

      expect(getByText('서울(V)')).toBeInTheDocument();
    });
  });

  context('지역 목록 중 하나의 버튼을 클릭하면', () => {
    it('selectAddress 액션이 전달된다.', () => {
      const { getByText } = render((
        <AddressListContainer />
      ));

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(selectAddress(Number(getByText('서울').id)));
    });
  });
});
