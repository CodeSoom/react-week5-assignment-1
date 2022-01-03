import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurants list', () => {
    const { container } = render((
      <RestaurantContainer />
    ));

    expect(container).toHaveTextContent(restaurants[0].name);
  });
});
