import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import places from '../fixtures/places';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    places,
    restaurants,
  }));

  const { container } = render((
    <App />
  ));

  places.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  restaurants.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
