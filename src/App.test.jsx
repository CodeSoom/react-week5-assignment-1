import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalled();

  // expect(queryByText(/Hello/)).toBeNull();
});
