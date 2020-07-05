import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { regions, categories, restaurants } from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
    }));
  });

  it('show restaurant regions', () => {
    const { getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('show restaurant categories', () => {
    const { getByText } = render((
      <App />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('show restaurants', () => {
    const { getByText } = render((
      <App />
    ));

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
