import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantsResultContainer from './RestaurantsResultContainer';

import {
  region,
  category,
} from '../fixtures/staticData';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsResultContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<RestaurantsResultContainer />);
  });

  useSelector.mockImplementation((selector) => selector({
    region,
    category,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  test('calls loadRestaurant action to get restaurants', () => {
    expect(dispatch).toBeCalled();
  });

  test('renders restaurant result', () => {
    expect(screen.queryByText('양천주가')).not.toBeNull();
    expect(dispatch).toBeCalled();
  });
});
