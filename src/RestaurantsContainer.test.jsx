import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../__fixtures__/restaurants';

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer />
  ));

  it('renders restaurants list', () => {
    // When
    const { getByRole } = renderRestaurantsContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('마법사주방');
  });
});
