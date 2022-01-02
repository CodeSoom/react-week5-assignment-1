import React from 'react';
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalled();
});
