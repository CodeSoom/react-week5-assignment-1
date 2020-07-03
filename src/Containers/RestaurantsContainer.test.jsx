import React from 'react';
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('restaurants list', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          name: '양전주가',
        },
      ],
    }));

    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText(/양전주가/)).not.toBeNull();
  });
});
