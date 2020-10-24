import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import categories from './fixtures/categories';
import regions from './fixtures/regions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
    restaurants: [],
    selectedRegion: {
      regionName: '',
    },
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('show all categories', () => {
    const { getByText } = render(<App />);

    categories.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });

  it('show all regions', () => {
    const { getByText } = render(<App />);

    categories.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });
});
