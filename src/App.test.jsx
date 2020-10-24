import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import { regions, categories, restaurants } from '../fixtures/fixture';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
    selectedButtons: {
      region: '',
      category: '',
    },
  }));

  it('컴포넌트가 생성되면 intializeSelectButtonsAsync action이 dispatch 됩니다.', () => {
    render(<App />);

    expect(dispatch).toBeCalledWith({
      regions, categories,
    });
  });
});
