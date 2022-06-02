/* eslint-disable implicit-arrow-linebreak */
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      restaurants: [],
      restaurant: {},
    })
  );

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants: [] },
  });

  expect(queryByText(/김밥제국/)).toBeNull();
});
