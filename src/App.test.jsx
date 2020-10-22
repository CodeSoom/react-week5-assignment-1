import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  const initialState = {
    restaurantSearchQuery: {},
    restaurantData: {},
    loadingState: {},
  };

  const setState = (state) => {
    useSelector.mockImplementation((selector) => selector({
      ...initialState,
      ...state,
    }));
  };

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('when regions, categories have been loaded', () => {
    const loadingState = {
      categoriesLoading: false,
      regionsLoading: false,
    };
    const restaurantData = {
      regions,
      categories,
    };

    beforeEach(() => {
      setState({ restaurantData, loadingState });
    });

    it('renders them, has called dispatch', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when categories and regions are being loaded', () => {
    const loadingState = {
      categoriesLoading: true,
      regionsLoading: true,
    };

    beforeEach(() => {
      setState({ loadingState });
    });

    it('renders loading message', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });

  context('when restaurants has been loaded', () => {
    const loadingState = {
      restauarantsLoading: false,
    };
    const restaurantData = {
      regions,
      categories,
      restaurants,
    };

    beforeEach(() => {
      setState({ loadingState, restaurantData });
    });

    it('renders restaurants name', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/양천주가/)).not.toBeNull();
    });
  });

  context('when restaurants is being loaded', () => {
    const loadingState = {
      restaurantsLoading: true,
    };
    const restaurantData = {
      regions,
      categories,
    };

    beforeEach(() => {
      setState({ loadingState, restaurantData });
    });

    it('renders loading message', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });
});
