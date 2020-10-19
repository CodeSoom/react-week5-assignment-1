import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('<RestaurantsContainer />', () => {
  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer />
  ));

  it('renders restaurants list', () => {
    // When
    const { getByRole } = renderRestaurantsContainer();

    // Then
    expect(getByRole('list')).toBeInTheDocument();
  });
});
