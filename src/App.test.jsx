import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { initialState } from './reducer';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector(initialState));

  render(<App />);

  expect(dispatch).toBeCalledTimes(2);
});
