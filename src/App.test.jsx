import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  jest.mock('react-redux');

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentRegion: '',
      currentCategory: '',
      restaurants: [],
    }));
  });

  it('renders restaurant region buttons', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('renders restaurant category buttons', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
  });

  context('without restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = render(<App />);

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });
});
