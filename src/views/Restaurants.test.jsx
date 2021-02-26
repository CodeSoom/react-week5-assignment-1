import React from 'react';

import { render } from '@testing-library/react';

import { restaurants } from '../../fixtures';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  it('renders Restaurants', () => {
    const { queryByText } = renderRestaurants();

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });
});
