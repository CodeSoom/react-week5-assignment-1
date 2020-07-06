import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import App from './App';

jest.mock('react-redux');
// jest.mock('./services/api');
useSelector.mockImplementation((selector) => selector({
  regions: [{ id: 1, name: '서울' }],
}));

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({

  }));

  const { getByText } = render(<App />);

  expect(dispatch).toBeCalled();

  // expect(getByText(/Restaurants/)).not.toBeNull();
});
