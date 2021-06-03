import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

describe('RestaurantList', () => {
  it('renders list of matched restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      selected: {
        restaurants: ['원초밥'],
      },
    }));

    const { container } = render(<RestaurantList />);
    expect(container).toHaveTextContent('원초밥');
  });
});
