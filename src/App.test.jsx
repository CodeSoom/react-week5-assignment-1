import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locations: [],
    foodTypes: [],
    results: [],
  }));

  it('컴포넌트가 생성되면 intializeSelectButtons action이 dispatch 됩니다.', () => {
    render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'intializeSelectButtons',
    });
  });
});