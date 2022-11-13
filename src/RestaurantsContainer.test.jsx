import { useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '맛나' },
    ],
  }));

  function renderRestaurantsContainer() {
    return render((<RestaurantsContainer />));
  }

  it('레스토랑이 랜더링된다', () => {
    renderRestaurantsContainer();

    expect(screen.getByText(/맛나/)).not.toBeNull();
  });
});
