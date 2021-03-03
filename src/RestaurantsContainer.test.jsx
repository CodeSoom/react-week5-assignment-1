import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{ id: 1, name: '양천주가' }],
    }));
  });

  it('renders categories', () => {
    const { queryByText } = render(<RestaurantsContainer />);

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
