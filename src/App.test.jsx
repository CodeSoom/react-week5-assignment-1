import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');
jest.mock('../__mocks__/api');

test('App', () => {
  const dispatch = jest.fn(() => {});

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();

  expect(getByText('한식')).not.toBeNull();

  expect(dispatch).toBeCalled();
});
