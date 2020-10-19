import React from 'react';

import { render } from '@testing-library/react';

import restaurantRegions from '../__fixtures__/restaurantRegions';

import Regions from './Regions';

jest.mock('react-redux');

test('RestaurantRegions', () => {
  const { container } = render((
    <Regions restaurantRegions={restaurantRegions} />
  ));

  restaurantRegions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
