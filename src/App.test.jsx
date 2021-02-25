import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { restaurants } from '../fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders restaurants', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });

  it('loads regions and categories', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
