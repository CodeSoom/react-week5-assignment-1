import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/api');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1,
      name: '두향',
    },
    {
      id: 2,
      name: '맥도날드',
    },
    ],
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(queryByText(/두향/)).not.toBeNull();
  expect(queryByText(/맥도날드/)).not.toBeNull();
});
