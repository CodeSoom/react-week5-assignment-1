import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations: [],
    categories: [],
    restaurants: [],
    selectedLocation: { id: '', name: '' },
    selectedCategory: { id: '', name: '' },
  }));

  it('시작시 지역과 분류 값들을 가져옵니다.', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
