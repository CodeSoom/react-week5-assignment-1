import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      '홍콩반점',
      '포방터 돈까스',
    ],
  }));
});

describe('RestaurantsContainer', () => {
  context('without restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = render(<RestaurantsContainer />);

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { getByText } = render(<RestaurantsContainer />);

      expect(getByText('홍콩반점')).not.toBeNull();
      expect(getByText('포방터 돈까스')).not.toBeNull();
    });
  });
});
