import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    restaurantRegions: regions,
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('서울');

  expect(dispatch).toBeCalled();
});
