import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  const initialState = {
    restaurant: {},
    category: {},
    region: {},
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
    const restaurant = {
      loading: false,
      restaurants,
    };
    const category = {
      loading: false,
      categories,
    };
    const region = {
      loading: false,
      regions,
    };

    beforeEach(() => {
      setState({ restaurant, category, region });
    });

    it('renders state, has called dispatch', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();
      expect(queryByText(/양천주가/)).not.toBeNull();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when state is being loaded', () => {
    beforeEach(() => {
      setState({
        category: {
          loading: true,
        },
        region: {
          loading: true,
        },
      });
    });

    it('renders loading message', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });
});
