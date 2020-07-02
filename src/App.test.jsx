import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('can see', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (selector({
      regions: [],
      categories: [],
      restaurants: [],
    })));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).toBeNull();
    expect(queryByText('한식')).toBeNull();

    expect(dispatch).toBeCalledTimes(2);
  });
});
