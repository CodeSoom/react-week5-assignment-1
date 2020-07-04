import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('should display regions', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).toBeNull();
  });

  it('should display categories', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('중식')).toBeNull();
  });

  it('should display restaurants', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('원초밥')).toBeNull();
  });
});
