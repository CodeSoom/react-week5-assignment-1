import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions, categories } from '../fixtures/fixtures';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedOption: {
      region: null,
      category: null,
    },
    option: {
      regions,
      categories,
    },
  }));

  const { getByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalled();

  expect(getByText('서울')).not.toBeNull();

  expect(getByText('한식')).not.toBeNull();
});
