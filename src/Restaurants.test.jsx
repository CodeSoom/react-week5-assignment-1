import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../__fixtures__/restaurants';

test('Restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  restaurants.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
