import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./service/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const setState = (state) => {
    useSelector.mockImplementation((selector) => selector(state));
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when state has been loaded', () => {
    setState({
      loading: false,
      regions,
    });

    it('renders state, has called dispatch', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/한식/)).not.toBeNull();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('when state is being loaded', () => {
    setState({
      loading: false,
      regions,
    });

    it('renders loading message', () => {
      setState({
        loading: true,
      });

      const { queryByText } = render(<App />);

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });
});
