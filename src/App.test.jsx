import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('Restaurants');

  regions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });

  expect(dispatch).toBeCalled();
});
