import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

describe('RestaurantList', () => {
  it('renders list of matched restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      selected: {
        restaurants: [{
          id: 5,
          categoryId: 3,
          name: '원초밥',
          address: '서울 강남구',
          information: '원초밥 in 서울 강남구',
        }],
      },
    }));

    const { container } = render(<RestaurantList />);
    expect(container).toHaveTextContent('원초밥');
  });
});
