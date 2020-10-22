import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render((
    <App />
  ));

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
