import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./service/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ regions }));

  const { queryByText } = render(<App />);

  expect(queryByText(/서울/)).not.toBeNull();

  expect(dispatch).toBeCalled();
});
