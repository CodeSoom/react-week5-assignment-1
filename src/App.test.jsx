import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(3);

  expect(queryByText(/Restaurant Information/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
