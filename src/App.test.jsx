import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith(() => {});

  expect(getByText('서울')).not.toBeNull();
});
