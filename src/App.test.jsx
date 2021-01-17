import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';
import restaurants from '../__fixtures__/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App Component', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
    selected: {
      region: '',
      category: '',
    },
  }));

  it('page render', () => {
    const { container } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
