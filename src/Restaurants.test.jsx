import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import Restaurants from './Restaurants';

test('restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(getByText('베니스')).not.toBeNull();
});
