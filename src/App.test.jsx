import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import places from '../fixtures/places';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    places,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Location && Restaurants/)).not.toBeNull();
  expect(getByText(/서울/)).not.toBeNull();

  expect(dispatch).toBeCalledWith({
    type: 'setPlaces',
    payload: { places },
  });
});
