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
    locations: [{ id: 1, name: '서울' }, { id: 2, name: '대구' }],
    foodTypes: [{ id: 1, name: '한식' }, { id: 2, name: '일식' }],
    results: [{ id: 1, name: '밀면' }],
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
