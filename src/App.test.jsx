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

  it('renders correctly when state has been loaded', () => {
    setState({
      regions,
      loading: false,
    });

    const { queryByText } = render(<App />);

    expect(queryByText(/서울/)).not.toBeNull();

    expect(dispatch).toBeCalled();
  });

  it('renders loading message when state is being loaded', () => {
    setState({
      loading: true,
    });

    const { queryByText } = render(<App />);

    expect(queryByText(/로딩중/)).not.toBeNull();
  });
});
