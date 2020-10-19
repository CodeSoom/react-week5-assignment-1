import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

describe('<RestaurantRegionsContainer />', () => {
  const renderRestaurantRegionsContainer = () => render((
    <RestaurantRegionsContainer />
  ));

  it('renders region list', () => {
    // When
    const { getByRole } = renderRestaurantRegionsContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('서울');
  });
});
