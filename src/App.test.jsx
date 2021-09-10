import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import places from '../fixtures/places';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  const clickedCategory = 1;
  const clickedPlace = '서울';

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    places,
    categories,
    restaurants,
    clickedCategory,
    clickedPlace,
  }));

  const { container } = render((
    <App />
  ));

  places.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  categories.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  restaurants.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
