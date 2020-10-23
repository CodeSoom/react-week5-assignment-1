import React from 'react';

import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { regionsFixture, categoriesFixture, restaurantFixture } from '../fixtures/fixtures';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: regionsFixture,
    categories: categoriesFixture,
    restaurants: restaurantFixture,
    category: 1,
    region: '서울',
  }));

  const { container, getByText } = render((
    <App />
  ));

  regionsFixture.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  categoriesFixture.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  restaurantFixture.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  expect(getByText('서울(V)')).not.toBeNull();

  expect(getByText('한식(V)')).not.toBeNull();
});
