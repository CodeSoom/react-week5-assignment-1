import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: '',
    regions: [],
    category: '',
    categories: [],
  }));

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(2);
  expect(queryByText('서울')).toBeNull();
});
