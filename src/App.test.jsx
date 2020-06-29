import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => (selector({
    regions,
  })));

  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();

  expect(dispatch).toBeCalledWith({
    type: 'setRegions',
    payload: {
      regions: [],
    },
  });
});
