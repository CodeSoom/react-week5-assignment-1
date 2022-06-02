import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';

import Restaurants from './Restaurants';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('Restaurants', () => {
  context('with currentRegionId and currentCategoryId', () => {
    it('renders restaurants', () => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurants: state.restaurants,
        currentRegionId: '1',
        currentCategoryId: '1',
      }));

      render(<Restaurants />);

      expect(screen.getByText('양천주가')).toBeInTheDocument();
    });
  });
});
