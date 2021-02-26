import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

import categories from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }))

  it('renders buttons', () => {
    const { queryByText } = render(<App />)
    expect(dispatch).toBeCalledTimes(2);

    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    })

    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })
})
