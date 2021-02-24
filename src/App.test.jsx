import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { restaurants } from '../fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  given('regions', () => ([]));
  given('categories', () => []);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: given.regions,
      categories: given.categories,
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

  // 좀 더 표현이 좋은 description이 생각나지가 않...
  it('calls dispatch upon mounting', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
