import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import categories from '../__fixtures__/categories';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurants');

  regions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  categories.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  expect(dispatch).toBeCalledTimes(2);
});
