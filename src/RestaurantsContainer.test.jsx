import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';
import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixture/restaurants';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    given('selector', () => ({
      restaurants,
    }));
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(given.selector));

  it('renders restaurants', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('서울식당');
  });
});
