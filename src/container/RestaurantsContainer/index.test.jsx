import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  it('renders restaurants', () => {
    const { getByText } = render(<RestaurantsContainer />);

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
