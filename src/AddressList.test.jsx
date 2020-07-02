import React from 'react';

import { render } from '@testing-library/react';

import AddressList from './AddressList';

describe('AddressList', () => {
  it('레스토랑 지역 목록이 로딩된다.', () => {
    const addressList = [
      { id: 1, name: '서울' },
    ];

    const { getByText } = render((
      <AddressList addressList={addressList} />
    ));

    expect(getByText('서울')).toBeInTheDocument();
  });
});
