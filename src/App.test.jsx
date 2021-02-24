import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('./services/api');
jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { queryByText } = render((<App />));

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();

  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
  expect(queryByText('일식')).not.toBeNull();
});
