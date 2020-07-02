import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import AddressListContainer from './AddressListContainer';

import addressList from '../__fixture__/restaurants';

jest.mock('react-redux');

describe('AddressListContainer', () => {
  it('레스토랑 지역 목록이 로딩된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      addressList,
    }));

    const { getByText } = render((
      <AddressListContainer />
    ));

    expect(getByText('서울')).toBeInTheDocument();
  });
});
