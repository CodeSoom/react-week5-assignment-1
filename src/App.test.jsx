import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: '',
        categoryId: 0,
      },
      regions,
      categories,
      restaurants,
    }));
  });

  it('renders', () => {
    const { container } = render(<App />);

    expect(container).not.toBeNull();
  });
});
