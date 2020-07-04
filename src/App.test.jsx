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
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).toBeNull();
  });

  it('should display cetogories', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      cetogories: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('중식')).toBeNull();
  });
});
