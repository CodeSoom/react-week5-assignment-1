import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import categories from './fixtures/categories';

import regions from './fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
  }));

  it('show categories and regions', () => {
    const { getByText } = render(<App />);

    categories.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });

    regions.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });

  it('show restaurants information', () => {
    const { getByText } = render(<App />);

    expect(getByText('새마을 식당')).not.toBeNull();
  });
});
