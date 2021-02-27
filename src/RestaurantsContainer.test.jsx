import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{ id: 1, name: '라이브볼' }],
    }));
  });

  it('renders restaurant', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('라이브볼');
  });
});
