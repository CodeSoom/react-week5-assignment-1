import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import defaultState from '../fixtures/defaultState';
import { regions } from '../fixtures/regions';
import { categories } from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector(defaultState));

  it('지역 리스트가 나타난다.', () => {
    const { getByText } = render(<App />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
    expect(getByText(/대구/)).not.toBeNull();
  });

  it('카테고리 리스트가 나타난다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });

  it('검색된 레스토랑 리스트가 나타난다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('홍콩반점')).not.toBeNull();
  });

  it('컴포넌트가 렌더링되면 dispatch가 발생한다.', () => {
    // dispatch 호출 횟수 확인용
    const dispatch2 = jest.fn();
    useDispatch.mockImplementation(() => dispatch2);
    useSelector.mockImplementation((selector) =>
      selector({
        regions,
        categories,
        restaurants: [{ id: 1, name: '홍콩반점' }],
      }),
    );
    render(<App />);

    expect(dispatch2).toBeCalledTimes(2);
  });

  it('selectedRegion, selectedCategory이 잇으면, dispatch가 발생한다.', () => {
    // dispatch 호출 횟수 확인용
    const dispatch2 = jest.fn();
    useDispatch.mockImplementation(() => dispatch2);
    useSelector.mockImplementation((selector) => selector(defaultState));

    render(<App />);

    expect(dispatch2).toBeCalledTimes(3);
  });
});
