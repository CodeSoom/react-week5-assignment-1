import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { categories, restaurants } from '../fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  given('regions', () => ([]));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: given.regions,
      categories,
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

  it('calls dispatch upon mounting', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(1);
  });

  it('renders categories buttons', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();

    // identical assertions on the rest of the categories
    categories
      .filter((category, index) => index > 2)
      .forEach(({ name }) => {
        expect(queryByText(name)).not.toBeNull();
      });
  });
});
