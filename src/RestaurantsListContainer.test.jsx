import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsListContainer from './RestaurantsListContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurants', () => {
    const { queryByText } = render((
      <RestaurantsListContainer />
    ));

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
