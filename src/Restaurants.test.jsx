import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../__fixtures__/restaurants';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const { container } = render((
    <Restaurants restaurants={restaurants} />
  ));

  restaurants.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
