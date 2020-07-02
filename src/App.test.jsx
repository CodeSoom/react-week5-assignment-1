import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import { addressList } from '../__fixture__/restaurants';

jest.mock('react-redux');

describe('App', () => {
  it('레스토랑 지역 목록과 카테고리 목록이 로딩된다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      addressList,
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
  });
});
