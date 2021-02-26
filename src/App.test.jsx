import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { restaurants } from '../fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  given('restaurants', () => ([]));
  given('selected', () => ({
    region: '',
    category: '',
  }));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: given.restaurants,
      selected: given.selected,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders restaurants', () => {
    given('restaurants', () => restaurants);

    const { queryByText } = render(<App />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });

  context('without selected restaurant', () => {
    it('doesnt load restaurant', () => {
      render(<App />);

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('with selected restaurant', () => {
    it('loads regions, categories, and restaurants', () => {
      given('selected', () => ({
        region: {
          id: 1,
          name: '서울',
        },
        category: {
          id: '1',
          name: '한식',
        },
      }));

      render(<App />);

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
