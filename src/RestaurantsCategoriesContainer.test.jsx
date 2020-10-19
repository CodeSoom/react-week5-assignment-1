import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsCategoriesContainer from './RestaurantsCategoriesContainer';

describe('<RestaurantsCategoriesContainer />', () => {
  const renderRestaurantsCategoriesContainer = () => render((
    <RestaurantsCategoriesContainer />
  ));

  it('renders categories list', () => {
    // When
    const { getByRole } = renderRestaurantsCategoriesContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('한식');
  });
});
