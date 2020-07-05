import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CATEGORIES from './__fixtures__/categories.json';
import RESTAURANTS from './__fixtures__/restaurants.json';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurants', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        categories: [],
        restaurants: [],
      }));
    });

    it('display empty restaurants', () => {
      const { container } = renderComponent();
      expect(container.querySelector('#restaurant-list').children).toHaveLength(0);
    });
  });

  context('with restaurants', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        categories: [],
        restaurants: RESTAURANTS,
      }));
    });

    it('display restaurants', () => {
      const { container } = renderComponent();
      expect(container.querySelector('#restaurant-list').children).toHaveLength(RESTAURANTS.length);
    });
  });

  context('without categories', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        categories: [],
        restaurants: [],
      }));
    });

    it('display empty restaurants', () => {
      const { container } = renderComponent();
      expect(container.querySelector('#category-button-list').children).toHaveLength(0);
    });
  });

  context('with categories', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        categories: CATEGORIES,
        restaurants: [],
      }));
    });

    it('display categories', () => {
      const { container } = renderComponent();
      expect(container.querySelector('#category-button-list').children).toHaveLength(CATEGORIES.length);
    });
  });
});
