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
    categories: [{ id: 1, name: '한식' }],
    restaurants: [],
  }));

  const { queryByText } = render((<App />));

  await waitFor(() => queryByText('서울'));
  await waitFor(() => queryByText('한식'));

  expect(queryByText('서울')).not.toBeNull();

  expect(queryByText('한식')).not.toBeNull();

  expect(dispatch).toBeCalledTimes(2);
});
