import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import categoriesTestData from './fixtures/categories';

import regionsTestData from './fixtures/regions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: categoriesTestData,
    regions: regionsTestData,
  }));

  it('show categories and regions', () => {
    const { getByText } = render(<App />);

    const categories = categoriesTestData;

    const regions = regionsTestData;

    categories.forEach(({ category }) => {
      expect(getByText(`${category}`)).not.toBeNull();
    });

    regions.forEach(({ region }) => {
      expect(getByText(`${region}`)).not.toBeNull();
    });
  });
});
