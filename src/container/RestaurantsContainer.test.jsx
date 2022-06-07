import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('RestaurantsContainer render', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{
        id: 1,
        name: '맛집',
      }],
    }));
    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText('맛집')).not.toBeNull();
  });
});
