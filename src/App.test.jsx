import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import categories from '../__fixtures__/categories';

import restaurants from '../__fixtures__/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  const renderApp = () => render(<App />);

  describe('RegionsContainer', () => {
    it('renders regions', () => {
      const { container } = renderApp();

      regions.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  describe('CategoriesContainer', () => {
    it('renders categories', () => {
      const { container } = renderApp();

      categories.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  describe('RestaurantsContainer', () => {
    it('renders restaurants', () => {
      const { container } = renderApp();

      restaurants.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });
});
