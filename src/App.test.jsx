import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

import { initialState } from './reducer';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    ...initialState,
    regions,
    categories,
  }));

  const { getByText } = render(<App />);

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울/)).not.toBeNull();

  expect(dispatch).toBeCalled();
});
