import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locations: ['서울', '대구'],
    foodTypes: ['한식', '일식'],
    results: ['밀면'],
    selectedButtons: {
      location: '',
      foodType: '',
    },
  }));

  it('컴포넌트가 생성되면 intializeSelectButtons action이 dispatch 됩니다.', () => {
    render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'intializeSelectButtons',
    });
  });
});
