import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions, categories, restaurants } from './fixtures/mockData';

jest.mock('react-redux');

describe('App', () => {
  it('render regions, categories, restaurants', () => {
    const initialState = {
      regions,
      categories,
      restaurants,
      error: { regions: null, categories: null, restaurants: null },
      selected: { regionName: null, categoryId: null },
    };
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(initialState));

    const { getByText } = render(<App />);

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
