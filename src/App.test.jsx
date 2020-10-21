import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../__fixtures__/regions';

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
});
