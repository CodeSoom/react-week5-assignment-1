import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AddressList from './AddressList';

import { addressList } from '../__fixture__/restaurants';

describe('AddressList', () => {
  it('레스토랑 지역 목록이 로딩된다.', () => {
    const { getByText } = render((
      <AddressList addressList={addressList} />
    ));

    expect(getByText('서울')).toBeInTheDocument();
  });

  it('각각의 지역 버튼을 클릭할 수 있다.', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <AddressList
        addressList={addressList}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText(/서울/));

    expect(handleClick).toBeCalled();
  });
});
