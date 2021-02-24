import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('./services/api');
jest.mock('react-redux');

test('App', async () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
  }));

  const { queryByText } = render((<App />));

  await waitFor(() => queryByText('서울'));

  expect(queryByText('서울')).not.toBeNull();

  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
  expect(queryByText('일식')).not.toBeNull();

  expect(dispatch).toBeCalled();
});
