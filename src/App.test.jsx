import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

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

  context('when state has been loaded', () => {
    const state = {
      restaurantData: {
        regions,
        categories,
      },
      loadingState: {
        categoriesLoading: false,
        regionsLoading: false,
      },
    };

    beforeEach(() => {
      setState(state);
    });

    it('renders state, has called dispatch', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when state is being loaded', () => {
    const state = {
      loadingState: {
        categoriesLoading: true,
        regionsLoading: true,
      },
    };

    beforeEach(() => {
      setState(state);
    });

    it('renders loading message', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });
});
