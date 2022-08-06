import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantsResultContainer from './RestaurantsResultContainer';

import {
  region,
  category,
  restaurants,
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
    restaurants,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  test('renders restaurant result', () => {
    expect(screen.queryByText('한국식 초밥')).not.toBeNull();
  });
});
