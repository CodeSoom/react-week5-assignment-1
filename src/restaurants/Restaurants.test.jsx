import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders each item', () => {
    const { queryByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    restaurants.forEach(({ name }) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('renders default message without restaurants', () => {
    const { queryByText } = render((
      <Restaurants />
    ));

    expect(queryByText(/표시할 레스토랑이 없어요~/));
  });
});
