import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

import {
  setRegions,
} from './actions';

jest.mock('react-redux');

test('App', async () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ regions }));

  const { queryByText } = await render(<App />);

  expect(queryByText(/서울/)).not.toBeNull();

  expect(dispatch).toBeCalledWith(setRegions(regions));
});
